let item = prompt("masukkan nama makanan / minuman : \n (menu: nasi, daging, susu, burger, softdrink)");

switch (item) {
  case 'nasi':
  case 'daging':
  case 'susu':
    alert("makanan / minuman SEHAT")
    break;
  case 'burger':
  case 'softdrink':
    alert("makanan / minuman TIDAK SEHAT")
    break;
  default:
    alert("makanan / minuman tidak tersedia!")
}







// let angka = parseInt(prompt("masukkan angka: "))

// switch (angka) {
//   case 1:
//     alert('anda memasukkan angka 1');
//     break;
//   case 2:
//     alert('anda memasukkan angka 2');
//     break;
//   case 3:
//     alert('anda memasukkan angka 3');
//     break;
//   default:
//     alert('angka yang anda masukkan tidak ada')
// }


// if (angka === 1) {
//   alert("anda memasukkan angka 1")
// } else if (angka === 2) {
//   alert("anda memasukkan angka 2")
// } else {
//   alert("angka yang anda masukkan salah")
// }