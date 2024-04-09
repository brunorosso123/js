const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
const response = await fetch ('https://api.escuelajs.co/api/v1/products');
const products = await response.json();

export { products };