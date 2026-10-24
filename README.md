# Kopi Kutu - Sistem Manajemen Pesanan Kasir
Mini project backend berbasis Node.js untuk mensimulasikan operasi CRUD pada sistem pemesanan pada kafe Kopi Kutu.

# Fitur yang tersedia
- **Create**: Menambah pesanan pelanggan baru ke dalam sistem.
- **Read**: Menampilkan seluruh daftar pesanan beserta status pesanannya.
- **Update**: Mengubah status pesanan dari "Diproses" menjadi "Selesai".
- **Delete**: Membatalkan dan menghapus pesanan dari sistem.

# Kriteria & Teknologi yang diterapkan
- **JavaSript (ES6)**: Menggunakan `import` dan `export` (Modularisasi).
- **Arrow Functions**: Menggantikan deklarasi fungsi tradisional.
- **Array Methods**: Menggunakan `.map()` dan `.findIndex()` untuk memanipulasi data.
- **Spread Operator**: Menggabungkan dan menimpa objek data (`...`).
- **Destructuring Assignment**: Mengekstrak data dari objek.
- **Template Literals**: Menggunakan *backtick* (`` ` ``) untuk output console yang rapi.
- **Validasi Data**: Menggunakannya di setiap awal fungsi untuk mencegah input data kosong dan mencegah pemrosesan ID yang tidak ditemukan.

# Cara Menjalankan Program
1. Pastikan Node.js sudah terinstal di komputermu.
2. Buka terminal dan arahkan ke direktori proyek ini.
3. Ketikkan perintah berikut lalu tekan Enter:
   ```bash
   node app.js