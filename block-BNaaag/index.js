var { readFile, readFileSync } = require('fs');
readFile('./content.md', 'utf8', (err, content) => {
  console.log(err, content);
});

var result = readFileSync('./content.md', 'utf8');
console.log(result);
// //sync
// function sum(a, b) {
//   return a + b;
// }
// console.log(sum(5, 6));
// console.log('Welcome to Node.js');

// //async

// console.log('Welcome to Node.js');
// setTimeout(() => console.log('Async code'), 5000);
// console.log('Welcome to Async');

var buff1 = Buffer.alloc(10);

buff1.write('Welcome to Buffer');
console.log(buff1);
