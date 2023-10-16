//Verificação se pelo menos um dos numeros do array é ou não maior que um numero indicado 
const p = require('prompt-sync')();
n = Number(p("Numero de verificação? "));

const arr = [2,5,7,9];
const newarr = arr.some(num => num > n);
console.log(`Tem algum numero no array que seja maior que ${n}?`);
if(newarr === true) {
    console.log('Sim!');
} else {
    console.log('Não!');
}