# 🤖 Achya – AI Customer Support untuk MKA UGM

**Achya** adalah sistem **AI Customer Support** yang dibangun untuk membantu calon mahasiswa Universitas Gadjah Mada (UGM) dalam mendapatkan informasi seputar **Program studi Magister Kecerdasan Artificial** secara cepat dan otomatis. Sistem ini menggunakan **n8n** untuk orkestrasi alur kerja, **webhook** untuk integrasi ke **WhatsApp** sebagai kanal komunikasi utama.

## 🚀 Fitur Utama

* 💬 Balas otomatis pertanyaan via WhatsApp
* 🔗 Integrasi webhook dua arah antara WhatsApp dan n8n
* 🤖 Respons cerdas berbasis AI
* 📊 Menggunakan session, sehingga dapat mengingat komunikasi sebelumnya.
* 🛠️ Workflow modular dan dapat dikustomisasi

## 🛠️ Teknologi yang Digunakan

* [n8n](https://n8n.io/) – Automasi alur kerja
* Webhook – Untuk komunikasi antara WA dan n8n
* Google Doc – Untuk penyimpanan basis pengetahuan
* Gemini – Untuk pemrosesan pesan berbasis AI

## 🎯 Tujuan Proyek

Achya bertujuan untuk meringankan beban admin PMB dan meningkatkan pengalaman calon mahasiswa dengan menyediakan layanan CS otomatis, cepat, dan efisien dalam menjawab pertanyaan umum terkait MKA.

## 📦 Struktur Proyek

```
.
├── index.js                       # main file
├── package.json                   # Package yang harus diinstall
├── package-lock.json
└── README.md                      # Dokumentasi proyek ini
```


## ⚙️ Cara Menjalankan

Ikuti langkah-langkah berikut untuk menjalankan **Achya** di lokal:

1. 🧾 **Clone** repositori ini:

   ```bash
   git clone https://github.com/cholilfayyadl/rag-chatbot.git
   cd rag-chatbot
   ```

2. ⚙️ **Install n8n** (bisa global atau via Docker):

   ```bash
   npm install -g n8n
   ```

3. 🛠️ **Install Node.js dan npm** (jika belum ada)
   Pastikan versi terbaru telah terpasang:
   [Download Node.js](https://nodejs.org/)

4. 📦 **Install dependensi dari `package.json`**:

   ```bash
   npm install
   ```

5. 🔑 **Masuk ke dashboard n8n**
   Jalankan n8n:

   ```bash
   n8n
   ```

   Buka browser ke `http://localhost:5678`

6. 📥 **Impor file workflow** `MKA_CS.json` ke n8n

7. 🔐 **Setup Credential** untuk:

   * Gemini API
   * Google Doc (untuk Knowledge Base)

8. ▶️ **Jalankan `index.js`** untuk mengaktifkan wa webhook, setelah muncul barcode silahkan di scane dan pastikan sudah masuk.

   ```bash
   node index.js
   ```

Setelah semua berjalan, **Achya** siap menerima dan membalas pesan dari WhatsApp secara otomatis!

---


## 📝 Catatan Tambahan

* Setelah menscane barcode pastikan akun WhatsApp sudah tersambung di WA Web dan webhook dapat menerima pesan
* Workflow dapat dikembangkan lebih lanjut untuk fitur seperti kuis, pengingat tugas, atau pengumuman lain.

## 👨‍💻 Pengembang

Proyek ini dibuat untuk memenuhi tugas mini project Prinsip Kecerdasan Artificial.

---

