import {tampilkanSemuaPesanan, tambahPesanan, selesaikanPesanan, hapusPesanan} from './crud.js';

console.log(`Memulai Kasir Kopi Kutu\n`);

tampilkanSemuaPesanan();

// READ: Menampilkan data bawaan awal
tampilkanSemuaPesanan();

// CREATE: Kasir menambah pesanan Budi, dan menguji validasi keamanan dengan data kosong
tambahPesanan("Budi", "Kutu Susu", 3);
tambahPesanan("", "Kutu Hitam", 1); // Ini akan memicu pesan error validasi (gagal)

// READ: Mengecek apakah pesanan Budi sudah masuk
tampilkanSemuaPesanan();

// UPDATE: Kasir menyelesaikan pesanan milik Yanto (ID 1)
selesaikanPesanan(1);

// DELETE: Kasir membatalkan/menghapus pesanan milik Siti (ID 2)
hapusPesanan(2);

// READ AKHIR: Menampilkan rekap data terakhir setelah semua operasi selesai
tampilkanSemuaPesanan();