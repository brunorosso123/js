// find retorna el priemr objeto que cumpla la condicional
 const numbers = [1,30,40,56,67,34];
 let rta = numbers.find(item => item == 32)
 console.log(rta);


 const products = [
    {
      name: "Pizza",
      price: 12,
      id: '🍕'
    },
    {
      name: "Burger",
      price: 23,
      id: '🍔'
    },
    {
      name: "Hot dog",
      price: 34,
      id: '🌭'
    },
    {
      name: "Hot cakes",
      price: 355,
      id: '🥞'
    },
  ];

  let rta2 = products.find(item => item.id == '🥞')
 console.log('find', rta2);

 let rta3 = products.findIndex(item => item.id == '🥞')
 console.log('find', rta3); // devuelve en la posicion en la que esta el elemento buscado, si no encuentra el elemento devuelve -1