const score = 400
// console.log(score);

const balance = new Number(100)
// console.log(balance);

// console.log(balance.toString().length);
// console.log(balance.toFixed(1));

const otherNumber = 123.8966

// console.log(otherNumber.toPrecision(4));

const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN'));

// +++++++++++++ Maths +++++++++++++++++++++++++++++

// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(4.6));
// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.9));
// console.log(Math.min(4, 3, 6, 8));
// console.log(Math.max(4, 3, 6, 8));

//Math.random() returns float value between 0 and 1
console.log(Math.random());
console.log((Math.random()*10) + 1); // *10 ke wajese 0-9 ke beech return , +1 ke wajese 1 - 10 ke beech
console.log(Math.floor(Math.random()*10) + 1); // floor ke wajese float int ban jaega

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min) // isse min and max ke beech value aaegi
