console.log('Welcome to Node.js');

function add() {
  let sum = 0;
  for (let i = 1; i <= 10; i++) {
    sum += i;
  }
  return sum;
}

console.log(add());
