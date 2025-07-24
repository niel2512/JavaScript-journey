let tanya = true
while (tanya) {
  // Menangkap pilihan player
  let player = prompt("Pilih : \n Batu \n Gunting \n Kertas");

  // Membangkitkan bilangan random 0-1
  let com = Math.random();

  //  Menangkap pilihan computer
  if (com < 0.34) {
    com = 'Gunting';
  } else if (com >= 0.34 && com < 0.67) {
    com = 'Batu';
  } else {
    com = 'Kertas';
  }

  // Menetukan rules
  let hasil = ''
  if (player == com) {
    hasil = 'SERI!';
  } else if (player == 'Gunting') {
    hasil = (com == 'Kertas') ? 'MENANG!' : 'KALAH!';
    // if (com == 'Kertas') {
    //   hasil = 'MENANG!';
    // } else {
    //   hasil = 'KALAH!';
    // }
  } else if (player == 'Batu') {
    hasil = (com == 'Kertas') ? 'KALAH!' : 'MENANG!';
  } else if (player == 'Kertas') {
    hasil = (com == 'Gunting') ? 'KALAH!' : 'MENANG!';
  } else {
    hasil = 'Memasukkan Pilihan Yang Salah!'
  }

  // Tampilkan Hasil
  alert('Kamu memilih : ' + player + ' dan Komputer memilih : ' + com + '\n Maka Hasilnya : Kamu ' + hasil)
  tanya = confirm('lagi?')
}
alert('Trims Sudah Main');