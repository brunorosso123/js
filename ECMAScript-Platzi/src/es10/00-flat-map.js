const array = [1,1,2,3,4,5, [1,3,5,7,9,[2,4,6,8,]]];
console.log(array.flat(5));

const array2 = [1,2,3,4,5];
console.log(array2.flatMap(v => [v, v *2]));


const hello = "       Hello World!   ";
console.log(hello.trimStart());
console.log(hello.trimEnd());
