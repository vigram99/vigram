var varian;
var nama;
var alamat;
var provinsi;
var kota;
var kecamatan;
var notelepon;
var bayar;
var data;
var ukuran;

bayar = document.querySelector("#bayar").addEventListener("click", function(e) {
    e.preventDefault();
    bayarSekarang();

});


function bayarSekarang() {
    varian = document.querySelector("[name='size']").value;
    varian = document.querySelector("[name='varian']").value;
    nama = document.querySelector("[name='nama']").value;
    alamat = document.querySelector("[name='alamat']").value;
    provinsi = document.querySelector("[name='provinsi']").value;
    kota = document.querySelector("[name='kota']").value;
    kecamatan = document.querySelector("[name='kecamatan']").value;
    notelepon = document.querySelector("[name='notelepon']").value;
    data = "Halo kak saya ingin order dengan data berikut: | Nama Lengkap: " + nama + " | " +
        "Alamat: " + alamat + " | " +
        "Provinsi: " + provinsi + " | " +
        "Kota: " + kota + " | " +
        "Kecamatan: " + kecamatan + " | " +
        "No Telepon: " + notelepon + " | " +
        "Varian: " + varian + " | " +
        "Ukuran: " + ukuran;
    var wa = "https://wa.me/6285157302556?text=" + data;
    window.location.href = wa, true;

}
