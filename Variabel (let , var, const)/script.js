// console.log("tes");

// variabel dengan let (nilai nya bisa berubah)
let nama = "niel";
console.log(nama);

// override nilai variabel nama
nama = "yusuf";
console.log(nama);

// variabel dengan var (nilai nya bisa berubah)
var namaDepan = "Niels";
console.log(namaDepan);
namaDepan = "nel";
console.log(namaDepan);

// kelakuan dari let dengan scope
let namaBelakang = "Nielson";
{
  let namaBelakang = "nelss";
  console.log(namaBelakang);
}
console.log(namaBelakang);

// kelakuan dari var
var namaTengah = "Nelso";
{
  var namaTengah = "ganteng";
  console.log(namaTengah);
}
console.log(namaTengah);

// kasus khusus tanpa keyword (dibacanya var)
gorengan = "Bala-bala";
{
  gorengan = "Combro";
}
console.log(gorengan);

// variabel dengan const (harus kapital)
// //karena const atau konstan jadi tidak bisa di override
const TTL = "25 Desember 2003";
console.log(TTL);
// Override
// TTL = "1 Maret 2000"; //ini gakbisa
