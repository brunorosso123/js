const promise1 = new Promise((resolve, reject) => reject("reject"));
const promise2 = new Promise((resolve, reject) => resolve("resolve"));
const promise3 = new Promise((resolve, reject) => resolve("resolve2"));

Promise.allSettled([promise1, promise2, promise3])
.then(response => console.log(response));

//El método Promise.allSettled() devuelve una promesa que se cumple después de que todas las promesas dadas se hayan cumplido o rechazado, con una matriz de objetos que describen el resultado de cada promesa.
//Por lo general, se usa cuando tiene varias tareas asincrónicas que no dependen unas de otras para completarse correctamente, o si siempre desea saber el resultado de cada promesa.
//En comparación, la Promesa devuelta por Promise.all() puede ser más apropiada si las tareas dependen unas de otras/si desea rechazar inmediatamente cualquiera de ellas