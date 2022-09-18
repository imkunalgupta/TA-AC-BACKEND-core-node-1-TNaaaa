console.log('Welcome to Nodejs');

let os = require('os');
console.log(os.freemem());
console.log(os.cpus().length);
console.log(os.uptime());
console.log(process.version);

var { readFile, readFileSync, unlink } = require('fs');

var buff1 = Buffer.alloc(12);
var buff2 = Buffer.allocUnsafe(12);
buff1.write('node.js, Node Assignment');
console.log(buff1.toString());

var sync = readFileSync('./app.js');
readFile('./app.js', (err, content) => {
  console.log(err, content.toString());
});
