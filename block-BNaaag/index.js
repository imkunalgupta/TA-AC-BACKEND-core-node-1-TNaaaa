var fs = require('fs');
fs.readFile('./index.md', (err, content) => {
  console.log(err, content.toString());
});

//sync
function sum(a, b) {
  return a + b;
}
console.log(sum(5, 6));
console.log('Welcome to Node.js');

//async

console.log('Welcome to Node.js');
setTimeout(() => console.log('Async code'), 5000);
