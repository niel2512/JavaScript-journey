let s = '';

// SEGITIGA V
for (let i = 0; i < 5; i++) {
  for (let j = 0; j < 5 - i; j++) {
    s += ' ';
  }
  for (let k = 0; k < 2 * i + 1; k++) {
    s += "*"
  }
  s += '\n';
}
console.log(s);

// SEGITIGA ^
// for (let i = 0; i < 5; i++) {
//   for (let j = 0; j <= i; j++) {
//     s += '*';
//   }
//   s += '\n';
// }
// console.log(s);