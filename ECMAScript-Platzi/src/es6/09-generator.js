//for valor of iterable recorre iterables, como arrays, Map o Set. El valor es cada elemento del iterable puede tener cualquier nombre, por eso se inicia con let nombre.

const array = [5, 4, 3, 2, 1]

for (let numero of array) {
  console.log(numero) // 5 4 3 2 1
}

//Sin embargo, debes tener en cuenta que solo podrás acceder a sus valores, y no a sus referencias, por lo que si quieres cambiar los elementos del array, necesitarás un índice array[indice].

for (let numero of array) {
    valor *= 2 
    console.log(numero) // 10 8 6 4 2
  }
   
  console.log(array) // [ 5, 4, 3, 2, 1 ]

  //Si intentas recorrer un objeto de esta forma for elemento of objeto, te ocurrirá un error, porque un objeto no es un iterable. En su lugar puedes utilizar for elemento in objeto, que recorrerá las propiedades del objeto.


const objeto = { a: 1, b:2, c: 3 }

for (let elemento in objeto) {
  console.log(elemento) // 'a' 'b' 'c'
}


//Sin embargo, si utilizas for elemento in array, no dará un error, pero el resultado no será el esperado, ya que los arrays son un tipo de objeto donde cada propiedad es el índice del valor del array o del iterable. Por lo que debes tener cuidado.

for (let elemento in array) {
    console.log(elemento) // '0' '1' '2' '3' '4'
  }


  //GENERATOR:es una función que muestra un objeto Generator y se define con la palabra clave function seguida de un asterisco (*)

  function* iterator(array){
    for (let value of array) {
        yield value;
        //Con yield se puede pausar una función generadora y mostrar el valor que le sigue a yield, y así proporcionar una opción ligera para iterar valores.
    }
  };

  const it = iterator(['Oscar', 'Clara', 'Ana', 'Ulises', 'Jennifer']);

  // para recordar el estado se usa next()

  console.log(it.next().value);
  console.log(it.next().value);
  console.log(it.next().value);
  console.log(it.next().value);
  console.log(it.next().value);
  console.log(it.next().value);
  console.log(it.next().value);