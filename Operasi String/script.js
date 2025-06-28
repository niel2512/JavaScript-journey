// Operasi String

// Char At
let dataString = "niell";
let dataChar = dataString.charAt(0);
console.log(`character pada index ke 0 adalah ${dataChar}`);
// Override
dataChar = dataString.charAt(1);
console.log(`character pada index ke 1 adalah ${dataChar}`);
dataChar = dataString.charAt(2);
console.log(`character pada index ke 2 adalah ${dataChar}`);
dataChar = dataString.charAt(3);
console.log(`character pada index ke 3 adalah ${dataChar}`);
dataChar = dataString.charAt(4);
console.log(`character pada index ke 4 adalah ${dataChar}`);

// Menyambung String
let namaDepan = "Niel";
let namaBelakang = "Yusuf";

let namaLengkap = namaDepan.concat(' ',namaBelakang, ' anjay');
console.log(namaLengkap);
let namaFull = `${namaDepan} ${namaBelakang}`;
console.log(namaFull);

// Mengambil index
console.log(namaLengkap.indexOf('N'));
console.log(namaLengkap.indexOf('n'));
console.log(namaLengkap.indexOf('y'));

// Substring
let namaLengkap_5_10 = namaLengkap.substring(5,10);
console.log(namaLengkap.substring(5,10));
console.log(namaLengkap.substring(10,5));

// Slice
console.log(namaLengkap.slice(10,5));
console.log(namaLengkap.slice(5,10));

// Replace
namaLengkap = namaLengkap.replace('Niel Yusuf', 'Nathaniel');
console.log(namaLengkap);

// Lowercase
console.log(namaLengkap.toLocaleLowerCase());
// Uppercase
console.log(namaLengkap.toLocaleUpperCase());

// extract data number
let dataString2 = '10';
console.log(dataString2);
console.log(typeof dataString2);
let dataInteger = parseInt(dataString2);
console.log(dataInteger);
console.log(typeof dataInteger);

let dataString3 = '10.55';
console.log(typeof dataString3);
let dataFloat = parseFloat(dataString3);
console.log(dataFloat);
console.log(typeof dataFloat);