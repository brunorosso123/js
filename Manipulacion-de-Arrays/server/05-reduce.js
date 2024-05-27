// no devuelve otro array

let totals = [ 1,2,3,45];


let sum = 0;
for (let index = 0; index < totals.length; index++) {
    const element = totals[index];
    sum = sum + element;
    
}
console.log(sum);


// el primer elemento es el acumulador el segundo es el item q se va iterando, se ejecuta la funcion, 0 es porque tiene q tener un estado inicial, se le puede poner cualquier numero
let resp = totals.reduce((sumatoria, item) => sumatoria + item, 0)

console.log('res',resp);




let vecesNumeros = (prueba=[]) => {
    prueba.reduce((obj,item) => {
        if(!obj[item]) {
            obj[item] = 1;
        } else {
            obj[item] = obj[item] + 1
        }
        return obj;
    }, {})
};
console.log(vecesNumeros([1,2,3,3]));
