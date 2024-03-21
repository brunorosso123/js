let numbers = [1,2,3,4,5,6,7,8];

console.log(numbers.includes(4));


const list = ['Oscar','David','Ana'];
let agregados = [];
for (const iterator of list) {
    let nopse = iterator.toLowerCase();
    agregados.push(nopse);
    console.log(nopse.includes('oscar')); // es keysensitive
};
console.log(agregados);
