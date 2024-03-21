// arrays destructuring

let fruits2 = ['Apple','Banana'];
let [a,b] = fruits2;
console.log(a,b);


// arrays destructuring
let fruits = ['Apple', 'Banana', 'Orange','Pepinou'];
let [,,fruit] = fruits;

console.log(fruit); /*arroja "Orange"*/

//object destructuring

let user = {username:'Oscar',age:34};
let {username,age}=user;
console.log(username,age);


// spread operator

let person = {name:"Oscar", age:32};
let country = "MX";
let totito = {sal: "si",condimento:'no'}
let vof = {si:true, no:false}

let data = {...person, country, ...totito, ...vof};
console.log(data);

let kissEmoji = [..."👩‍❤️‍💋‍👩"]
console.log(kissEmoji)

let familyEmoji = [..."👨‍👩‍👦‍👦"]
console.log(familyEmoji);


//rest

function sum(num, ...values){
    console.log(values);
    console.log(num + values[0]);
}

sum(1,2,3,4,5);