const letras = ['a','b','c',['e','f',['g']]];

for (let index = 0; index < letras.length; index++) {
    const element = letras[index];
    console.log(element);
}

letras.forEach(item => console.log(`foreach`,item));



const array = [1,13,4,55]
const rta = array.sort((a,b)=>a-b)
console.log(rta);


let nose = [[1,2],3,[4]]
let rta2 = nose.flat()
console.log(rta2);

const array3 = [{age: 1}, {age:2}]; 
const rta3 = array3.map(item => {   
  item.name = 'My name';
  return item; 
})
console.log(rta3);
console.log(array3);