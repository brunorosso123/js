console.log(window); // navegador
console.log(global);  // node
console.log(selft);// webworker
console.log(globalThis);


const regex = /\b(Apple)+\b/g;

const fruit = "Apple, Banana, Kiwi, Apple, Orange, etc. etc. etc.";

for (const match of fruit.matchAll(regex)) {
    console.log(match);
}