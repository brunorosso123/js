// promesas es algo que va a pasar 

const fnAsync = ()=>{
    return new Promise((resolve, reject)=>{
        (true)
            ? setTimeout(()=> resolve('AsynC'), 2000)
            : reject (new Error('Error'));
    })
};


const anotherFn = async ()=>{
    const something = await fnAsync();
    console.log(something);
    console.log("hello");
}
console.log('Before');
anotherFn();
console.log('after')