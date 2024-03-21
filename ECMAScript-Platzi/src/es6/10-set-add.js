const list = new Set();
// add agrega elementos
list.add('item1');
list.add('item2').add('item3');
//has pregunta si lo tiene, devuelve un boolean
list.has('item4');//false
//delete elimina el parametro que se le pase
list.delete('item2');
//size te dice la cantidad de elementos que tiene
//ist.size();



console.log(list);


const array = [1, 1, 2, 2, 3, 4, 4, 5]


//set no admite elementops repetidos
const sinRepetidos = [ ... new Set(array)]
console.log(sinRepetidos) // [ 1, 2, 3, 4, 5 ]

