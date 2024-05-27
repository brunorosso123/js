const products = [
    { title: 'Pizza', price: 121, id: '🍕' },
    { title: 'Burger', price: 121, id: '🍔' },
    { title: 'Hot cakes', price: 121, id: '🥞' },
];

const myProducts = [];

// const productIndex = products.findIndex(item => item.id === '🥞');
// console.log(productIndex);
// if(productIndex !== -1){
//     myProducts.push(products[productIndex]);
//     products.splice(productIndex,1);
// }

// console.log('products',products);
// console.log('myProducts',myProducts);
// console.log('-'.repeat(10));

// shallow copie afecta al original
// let copia = [...products]
// copia.splice(2)
// console.log('original',products);
// console.log('copia',copia);


// let copia2 = products.map(el => ({...el}));
// copia2.splice(2)
// console.log('copia2',copia2);
// console.log(products);


//UPDATE
const productsV2 = [
    { title: 'Pizza', price: 121, id: '🍕' },
    { title: 'Burger', price: 121, id: '🍔' },
    { title: 'Hot cakes', price: 121, id: '🥞' },
];
const update = {
    id: '🥞',
    changes:{
        price:200,
        description:'delicioso',

    }
}

let copiaProductsV2 = productsV2.map(el => ({...el}))
const productIndex = copiaProductsV2.findIndex(item => item.id === update.id);
copiaProductsV2[productIndex] = {
    ...copiaProductsV2[productIndex],
    ...update.changes,
}

console.log(productsV2);
console.log(copiaProductsV2);



