let dataString = "Data String";
console.log(dataString);

// Escaping String
let data1 = 'Niel berkata "Hello World"';
console.log(data1);
let data2 = "niel berkata \"Hello Worlde\"";
console.log(data2);
// nambahin enter
let data3 = "niel berjalan-jalan \ndi tepi pantai";
console.log(data3);
// nambahin tab
let data4 = "niel berjalan-jalan \tdi tepi pantai";
console.log(data4);

// Literal String (Template literal string)
let namaDepan = "Niel";
let namaBelakang = "yusuf";
let umur = 7;
//jadi masalah karna umur jadi string tanpa diketahui
let namaLengkap = namaDepan + " " + namaBelakang + " " + umur; 
console.log(namaLengkap);
console.log(typeof namaLengkap);

// cara yang benar agar lebih mudah diketahui bahwa umur diubah jadi string
let biodata = `${namaDepan} ${namaBelakang} dengan umur ${umur}`;
console.log(biodata);