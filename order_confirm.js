var varian;
var nama;
var alamat;
var provinsi;
var kota;
var kecamatan;
var notelepon;
var bayar;
var data;

bayar = document.querySelector("#bayar").addEventListener("click", function(e) {
    e.preventDefault();
    bayarSekarang();

});


function bayarSekarang() {
    varian = document.querySelector("[name='varian']").value;
    nama = document.querySelector("[name='nama']").value;
    alamat = document.querySelector("[name='alamat']").value;
    provinsi = document.querySelector("[name='provinsi']").value;
    kota = document.querySelector("[name='kota']").value;
    kecamatan = document.querySelector("[name='kecamatan']").value;
    notelepon = document.querySelector("[name='notelepon']").value;
    data = "Nama Lengkap: " + nama + "\n" +
        "Alamat: " + alamat + "\n" +
        "Provinsi: " + provinsi + "\n" +
        "Kota: " + kota + "\n" +
        "Kecamatan: " + kecamatan + "\n" +
        "No Telepon: " + notelepon + "\n" +
        "Varian: " + varian;
    var wa = "https://wa.me/6285879830690?text=" + data;
    window.location.href = wa, true;

}