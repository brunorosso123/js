const words = ["spray", "limit", "elite", "exuberant"];
const newArray = [];
for (let index = 0; index < words.length; index++) {
    const element = words[index];
    if (element.length>=6){
        newArray.push(element)
    }
}
console.log(newArray);

let filtrar = words.filter(item => item.length>=5)
console.log(filtrar);


//===============================================================================

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
    {
        customerName: "Valentina",
        total: 11111240,
        delivered: false,
      },
  ];

  let fil = orders.filter(item => item.delivered && item.total > 150)
  console.log(fil);


  let buscador = (query) =>{
    return orders.filter(item => item.customerName.includes(query) && item.delivered)
  };

  console.log(buscador('Valentina'));