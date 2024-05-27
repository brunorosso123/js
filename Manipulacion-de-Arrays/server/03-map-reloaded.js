const orders = [
    {
      customerName: "Nicolas",
      total: 60,
      delivered: true,
    },
    {
      customerName: "Zulema",
      total: 120,
      delivered: false,
    },
    {
      customerName: "Santiago",
      total: 180,
      delivered: true,
    },
    {
      customerName: "Valentina",
      total: 240,
      delivered: true,
    },
  ];

let add = (orders) =>{
    return orders.map( item => {
        console.log({
            ...item,
            tax:Math.round(imte.total*0.19),
        })
    })
}

function addNewAttr(orders){
    return orders.map(item =>{
        return {
            ...item,
            tax: Math.round(item.total*0.19),
        }
    })
}

addNewAttr(orders)

  let tot = orders.map(item => item.total);
  
  console.log('rta',tot);
//   let tot2 = orders.map(item => {
//       item.tax = .19;
//       return item
//     });
//     console.log('rta2',tot2);
// lo que hace hacerlo d3e esta manera es usar el mismo espacio en memoria
    console.log(orders);

    let tot3 = orders.map(item => {
        return {
            ...item,
            tax:.19,
        }
    })
    console.log(tot3);


    let copia = [...orders]

    console.log(copia);

    let tot4 = copia.map(item => {
        item.tax=.17
        return item
    })

console.log(tot4);