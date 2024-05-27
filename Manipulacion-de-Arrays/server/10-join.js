const elements = ['Fire', 'Air', 'Water'];
let rtaFinal='';
const separator = '--'
for (let index = 0; index < elements.length; index++) {
    const item = elements[index];

    (index == elements.length -1) 
    ?rtaFinal = rtaFinal + item
    : rtaFinal = rtaFinal + item + separator;
   
}

const rta1 = elements.join('--')

console.log(elements);
console.log(rtaFinal);
console.log(rta1);


const title = 'Curso de manipulacion de Arrays';
const titleFinal = title.split(' ').join('-').toLowerCase();
console.log(titleFinal);

