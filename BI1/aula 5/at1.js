//Multiplicador de array por um numero desejado

const p = require('prompt-sync')();

mult = Number(p("Por quantos multiplicar? "));
const arr = [2,5,7,9];
const novoArr= arr.map(num => num * mult);
console.log(`[${arr}] * ${mult} => [${novoArr}]`);

