// Operator Logika

// AND, OR, NOT

let data_bool = true;
console.log(data_bool);

// NOT
console.log(!data_bool); //flip data boolean
console.log(!!data_bool); //flip 2x data boolean
console.log(!1);
console.log(!0);

let is_sigma = true;
let is_boy = !is_sigma;

// OR (operasi antara 2 variabel boolean)
console.log(`true OR true, Hasil = ${true || true}`);
console.log(`true OR false, Hasil = ${true || false}`);
console.log(`false OR true, Hasil = ${false || true}`);
console.log(`false OR false, Hasil = ${false || false}`);

let makan = true;
let minum = false;
let sdh_mkn = makan || minum;
console.log(`Sudah Makan = ${sdh_mkn}`);

// AND (operasi antara 2 variabel boolean)
console.log(`true AND true, Hasil = ${true && true}`);
console.log(`true AND false, Hasil = ${true && false}`);
console.log(`false AND true, Hasil = ${false && true}`);
console.log(`false AND false, Hasil = ${false && false}`);

makan = true;
minum = false;
let sdh_mkn_mnm = makan && minum;
console.log(`Sudah Makan Minum? ${sdh_mkn_mnm}`);