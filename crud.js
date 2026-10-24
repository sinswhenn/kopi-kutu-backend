import pesanankutu from './data.js';

// Fungsi Read
export const tampilkanSemuaPesanan = () => {
    console.log("\n--- DAFTAR PESANAN KOPI KUTU ---");

    pesanankutu.map((pesanan) => {
        const {
            id,
            namaPelanggan,
            pesanan: menu,
            jumlah,
            statusSelesai
        } = pesanan;
    
        const status = statusSelesai === true ? "Selesai" : "Diproses";

        console.log(`[ID: ${id}] ${namaPelanggan} - ${jumlah} ${menu} (${status})`);
    });
};

// Fungsi Create
export const tambahPesanan = (namaPelanggan, menuBaru, jumlah) => {
    if (!namaPelanggan || !menuBaru || jumlah <=0) {
        console.log(`\n Gagal: Nama Pelanggan, Menu, dan Jumlah harus terisi`)
        return;
    }

    const idBaru = pesanankutu.length > 0 ? pesanankutu[pesanankutu.length - 1].id + 1 : 1;

    const statusDefault = { statusSelesai: false};

    const pesananBaru = {
        id : idBaru,
        namaPelanggan,
        pesanan : menuBaru,
        jumlah,
        ... statusDefault
    };

    pesanankutu.push(pesananBaru);

    console.log(`\nBerhasil menambah pesanan ${menuBaru} untuk ${namaPelanggan}`);
};

// Fungsi Update
export const selesaikanPesanan = (idTarget) => {
    const index = pesanankutu.findIndex((pesanan) => pesanan.id === idTarget);

    if (index === -1) {
        console.log(`Gagal: Pesanan dengan ID ${idTarget} tidak ditemukan!`)
        return;
    }

    pesanankutu[index] = {
        ...pesanankutu[index],
        statusSelesai : true
    };

    const {namaPelanggan, pesanan: menu} = pesanankutu[index];

    console.log(`\nPesanan ${menu} atas nama ${namaPelanggan} telah Selesai (ID: ${idTarget})`);
};

// Fungsi Delete
export const hapusPesanan = (idTarget) => {
    const index = pesanankutu.findIndex((pesanan) => pesanan.id === idTarget);

    if (index === -1) {
        console.log(`\n Gagal: Pesanan dengan ID ${idTarget} tidak ditemukan!`)
        return;
    }

    const {namaPelanggan, pesanan: menu} = pesanankutu[index];

    pesanankutu.splice(index, 1);

    console.log(`Pesanan ${menu} atas nama ${namaPelanggan} telah dihapus! (ID: ${idTarget})`);
};