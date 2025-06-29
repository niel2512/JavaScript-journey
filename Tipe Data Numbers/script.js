// numbers - 64 bit
let nilai_int = 10; //integer - nilai bilangan bulat
let nilai_float = 10.3; //float - nilai yang ada koma
let nilai_bigint = 1235092384398429384n;
console.log(typeof nilai_bigint);

let angka = 5.678;
let angka_int = parseInt(angka); //dibulatkan kebawah
console.log(angka_int);

let angka2 = 10.98;
console.log(parseFloat(angka2));

// merubah string
let data = "10.98";
// let data = "saya suka 10.98" //menjadi regex - NaN karna parse mengambil data pertama
console.log(data);
console.log(parseInt(data));
console.log(parseFloat(data));

// contoh
let pendapatan = "10000";
let pajak = 1200;
let bayar = parseInt(pendapatan) + pajak;
console.log(bayar)