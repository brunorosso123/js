let list = [];
for (let index = 0; index < 30; index++) {
    list.push(Math.floor(Math.random()*11))
}
console.log(list);
let rst = list.reduce((sum,value) => {
    if(value<1) sum['0'] +=1;
   else if(value < 5 ) sum['1-4'] += 1;
   else if(value < 9 ) sum['5-8'] += 1;
   else sum['9-10'] +=1;
        return sum;
    }, {
        '0':0,
        '1-4':0,
        '5-8':0,
        '9-10':0,
    });
    console.log(rst);