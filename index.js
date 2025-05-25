const { Client, LocalAuth } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');
const express = require('express');
const axios = require('axios');

const app = express();
app.use(express.json());

// === URL Webhook n8n kamu ===
const N8N_WEBHOOK_URL = 'http://localhost:5678/webhook/chat'; // Ganti ini

// === Setup WhatsApp Web Client ===
const client = new Client({
    authStrategy: new LocalAuth() // Simpan sesi login agar tidak scan QR tiap kali
});

client.on('qr', qr => {
    console.log('Scan QR berikut untuk login:');
    qrcode.generate(qr, { small: true });
});

client.on('ready', () => {
    console.log('✅ WhatsApp Client is ready!');
});

// === Kirim pesan masuk ke Webhook n8n ===
client.on('message', async msg => {
    const payload = {
        from: msg.from,
        body: msg.body,
        timestamp: msg.timestamp,
        type: msg.type
    };

    try {
        await axios.post(N8N_WEBHOOK_URL, payload);
        console.log('Pesan dikirim ke N8N');
    } catch (error) {
        console.error('❌ Gagal kirim ke N8N:', error.message);
    }
});

// === Terima balasan dari n8n dan kirim ke WA ===
app.post('/send-reply', async (req, res) => {
    const { to, message } = req.body;

    if (!to || !message) {
        return res.status(400).json({ error: 'Missing "to" or "message" field' });
    }

    try {
        await client.sendMessage(to, message);
        res.json({ success: true });
        console.log(`📤 Pesan dikirim ke ${to}: ${message}`);
    } catch (error) {
        console.error('❌ Gagal kirim pesan:', error.message);
        res.status(500).json({ error: 'Gagal kirim pesan' });
    }
});

// === Jalankan Express Server ===
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`🚀 Server listening on http://localhost:${PORT}`);
});

// === Jalankan WhatsApp Web Client ===
client.initialize();
