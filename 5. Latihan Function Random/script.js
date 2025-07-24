// let tanya = true
// while (tanya) {
//   let kesempatan = 3;
//   let com = Math.floor(Math.random() * 10) + 1;

//   while (kesempatan != 0 || kesempatan != kesempatan) {
//     let hasil = '';
//     let player = parseInt(prompt('Tebak Angka! \nMasukkan angka 1-10\nkesempatan anda ' + kesempatan + ' kali'));
//     if (player != com) {
//       hasil = (player > com) ? 'Nilai Terlalu Tinggi!' : 'Nilai Terlalu Rendah!';
//       kesempatan--;
//       alert(hasil + '\nKesempatan menebak : ' + kesempatan + ' nilai ' + com);
//     } else {
//       hasil = alert('Selamat Tebakanmu Benar! \nNilai Tebakan Adalah : ' + com);
//       break;
//     }
//     tanya = confirm('Mau Coba Tebak Lagi? \nKesempatan kamu tersisa: ' + kesempatan);
//     if (kesempatan == 0) {
//       alert('Kesempatan menebak sudah habis. \nNilai Tebakan Adalah : ' + com);
//       tanya = confirm('Mau Main Lagi?');
//       break;
//     }
//   }
// }
// alert('Trims Sudah Main');

// membuat game tebak angka

let start = true;

while (start) {

  let pc = Math.floor(Math.random() * 10) + 1;
  let hp = 5;
  let jumlah = 10;
  while (hp != 0 || hp != hp) {
    let user = parseInt(prompt('Tebak Angka! \nMasukkan angka 1-' + jumlah + '\nkesempatan anda ' + hp + ' kali'));
    let hasil = '';

    if (pc == user) {
      hasil = 'Selamat Tebakanmu Benar! \nNilai Tebakan Adalah : ' + pc;
      hp = hp;
      alert(hasil);
      break;
    } else if (pc != user) {
      hasil = (user > pc) ? "Terlalu besar" : "Terlalu kecil"
      hp--;
    } else {
      alert('Tolong jangan masukkan selain angka..')
      break;
    }
    if (hp == 0) {
      alert('Kesempatan menebak sudah habis. \nNilai Tebakan Adalah : ' + pc)
      break;
    } else {
      alert("Angka yang kamu masukkan " + hasil + "\nKesempatan Menebak Tersisa: " + hp);
    }
  }
  start = confirm('Mau main lagi ?')
}
alert('Trims Sudah Main')