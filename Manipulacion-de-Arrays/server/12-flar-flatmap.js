const matriz = [
    1,
    [1,2,3],
    [4,5,6],
    [7,8,[9,10,[11,12,'jkj']]]
];
let stri = matriz.toString()
let juntar = [];
let r = [];

for (let index = 0; index < stri.length; index++) {
    const element = stri[index];
    juntar.push(element)

    r = juntar.join('')
    // if(element != "," && element !='')
        // juntar.push(element)
}
let f = []
f.push(r)
console.log(f);

let rta = matriz.flat(10);// aplana todo en una sola linea
console.log(rta);

// flatmap hace el trabajo de map y flat

const users = [
    { userId: 1, username: "Tom", attributes: ["Nice", "Cute"]},
    { userId: 2, username: "Mike", attributes: ["Lovely"]},
    { userId: 3, username: "Nico", attributes: ["Nice", "Cool"]},
  ]

  let rtt = users.map(item => item.attributes).flat()
  console.log('flat y map',rtt);

  let rtt2 = users.flatMap(item=>item.attributes)
  console.log('flatmap',rtt2);









  const calendars = {
    primaryCalendar: [
      {
        startDate: new Date(2021, 1, 1, 15),
        endDate: new Date(2021, 1, 1, 15, 30),
        title: "Cita 1",
      },
      {
        startDate: new Date(2021, 1, 1, 17),
        endDate: new Date(2021, 1, 1, 18),
        title: "Cita 2",
      },
    ],
    secondaryCalendar: [
      {
        startDate: new Date(2021, 1, 1, 12),
        endDate: new Date(2021, 1, 1, 12, 30),
        title: "Cita 2",
      },
      {
        startDate: new Date(2021, 1, 1, 9),
        endDate: new Date(2021, 1, 1, 10),
        title: "Cita 4",
      },
    ],
  };
let rta3 = Object.values(calendars).flatMap(item=>item.map(date =>date.startDate))
console.log(rta3);




let gr = ["Beautiful is better than ugly", 3,
"Explicit is better than implicit",
"Simple is better than complex",
"Complex is better than complicated",]

function countWords(array){
    console.log(array.join(' ').split(' ').length); 
}

countWords(gr)