let s = '';

// SEGITIGA V
for (let i = 10; i > 0; i--) {
  for (let j = 0; j < i; j++) {
    s += '*';
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