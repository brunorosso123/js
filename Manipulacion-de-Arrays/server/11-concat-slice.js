const elements = [1,1,2,3,4,2];
const otherElements = [1,1,1,1];


let newArray = [...elements]
for (let index = 0; index < otherElements.length; index++) {
    const element = otherElements[index];
    newArray.push(element);
}

console.log(newArray);


let rta = elements.concat(otherElements);
console.log(rta);



const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

console.log(animals.slice(2));
// expected output: Array ["camel", "duck", "elephant"]

console.log(animals.slice(2, 4));
// expected output: Array ["camel", "duck"]