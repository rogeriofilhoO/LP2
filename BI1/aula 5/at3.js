//Verificação se TODOS os numeros do array são ou não menores que um numero indicado 
const p = require('prompt-sync')();
n = Number(p("Numero de verificação? "));

const arr = [2,5,7,9];
const newarr = arr.every(num => num < n);
console.log(`Todos no array são menores que ${n}?`);
if(newarr === true) {
    console.log('Sim!');
} else {
    console.log('Não!');
}