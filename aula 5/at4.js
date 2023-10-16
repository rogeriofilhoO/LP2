//Para colocar na ordem crescente e decrescente

const arr = [4,6,2,3];
const letters = ['j', 'g', 'r', 'a'];
const desce = arr.sort((a, b) => a > b ? -1 : 1);
console.log(desce);
const aumenta = letters.sort((a, b) => a > b ? 1 : -1);
console.log(aumenta);