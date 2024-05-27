// si alguno cumple la condicion, sea uno o todos devuelve un boolean

let numeros = [1,2,3,4];
let ver = numeros.some(item => item == 1)
console.log(ver);


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

  let verrr = orders.some(item => item.customerName == 'Sanago')
  console.log(verrr);


  let par = (nu)=>{
    return nu.some(item => item %2 ==0)
  }
  console.log(par([]));