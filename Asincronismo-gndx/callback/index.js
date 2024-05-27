function suma(a,b){
    return a+b;
}

function calc(a,b,callback){
    return callback(a,b)
}
console.log(calc(2,2, suma));


setTimeout(function () {
    console.log('otra funcion',calc(2,2, suma));
}, 5000);


function gretting (name){
    console.log(`Hola, ${name}`);
}
setTimeout(gretting,3000,'Oscar');





