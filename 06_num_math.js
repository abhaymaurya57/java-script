const score = 400
console.log(score)

const balance = new Number(100)
console.log(balance);

console.log(balance.toString().length);

const balance1 = new Number(100.004)
console.log(balance1);
console.log(balance1.toString().length);
console.log(balance1.toString());

const otherNumber = 23.2542352
console.log(otherNumber.toPrecision(5))

const hundreds = 1000000
console.log(hundreds.toLocaleString())
console.log(hundreds.toLocaleString('en-IN'))

// -----------------MATHS-----------------------

console.log(Math);
console.log(Math.abs(4));
console.log(Math.round(4.6));
console.log(Math.floor(4.6));
console.log(Math.min(4,6,2,8,4));
console.log(Math.random()*10)
console.log(Math.random()*1000)
console.log(Math.floor(Math.random()*1000)+1)

const min = 10
const max = 20

console.log(Math.floor(Math.random()*(max - min + 1)) + min)