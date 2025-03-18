// 1.Hindari Duplikasi, Gunakan Fungsi

//Contoh buruk (duplikasi kode):
console.log("Halo, Orion!");
console.log("Halo, Orion!");
console.log("Halo, Orion!");

//Contoh baik (pakai fungsi):
function sapa(nama) {
    console.log(`Halo, ${nama}!`);
}
sapa("Orion");
sapa("Orion");
sapa("Orion");

//=====================================

//2. Mindset Kolaboratif: Buat Kode yang Bisa Dimodifikasi Orang

//Contoh buruk (hardcode):
let diskon = 0.1;
let harga = 100000;
console.log("Harga setelah diskon:", harga - (harga * 0.1));

//Contoh baik (kode fleksibel):
function hitungDiskon(harga, diskon = 0.1) {
    return harga - (harga * diskon);
}

console.log("Harga setelah diskon:", hitungDiskon(100000));

//=====================================

//3. Buat Kode yang Rapi dan Efisien

//Contoh buruk (acak-acakan dan ga jelas):
function a(x){return x*2}b=a(5);console.log(b);

//Contoh baik (rapi dan jelas):
function kalikanDua(angka) {
    return angka * 2;
}

let hasil = kalikanDua(5);
console.log(hasil);

//=====================================

//4. Tambahkan Komentar yang Relevan

//Contoh:
function hitungPajak(harga) {
    // Pajak standar 10%
    let pajak = harga * 0.1;
    return pajak;
}

console.log(hitungPajak(200000));

//=====================================

//5. Buat Skema/Perencanaan Sebelum Ngoding

//Contoh skema sederhana (dalam bentuk komentar sebelum coding):
// Program Kasir Sederhana:
// 1. Input harga barang
// 2. Hitung total harga
// 3. Hitung diskon jika ada
// 4. Cetak struk pembayaran

function kasir(harga, diskon = 0.1) {
    let total = harga - (harga * diskon);
    console.log(`Total yang harus dibayar: Rp${total}`);
}

kasir(100000);

