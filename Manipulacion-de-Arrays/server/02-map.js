const letters = ['a','b','v'];


const hip = letters.map(item => item + '++');
console.log(hip);


const hop = [];
for (let index = 0; index < letters.length; index++) {
    const element = letters[index];
    hop.push(element + '--' );
}
console.log(hop);


const products = [
    {title:'Burger', price:123},
    {title:'Pizza', price:12},
]
 const lis = products.map(item => {
    return item.title +' '+ item.price
 })
 console.log(lis)



 function multiplyElements(num){
    return num.forEach(e => console.log(e*2));
 }
multiplyElements([1,2,3,4]);