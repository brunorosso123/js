
let parrafoUno = document.querySelector('.primer-parrafo');
let parrafoDos = document.querySelector('.segundo-parrafo');
let h1 = document.querySelector('h1')
let input = document.querySelector("#innn");
let pid = document.getElementById("pid")
let form = document.getElementById("form")


console.log(parrafoDos)
console.log({parrafoUno,input});

parrafoDos.innerHTML = "patito"; // cambia el html de esa parte, si se le pase un<br> le toma como lo q es
parrafoUno.innerText = "primero"; // modifica solo el texto, si se le pasa un <br> lo toma solo como texto

// console.log(h1.getAttribute('class'));
//  console.log(h1.setAttribute('class','rojo'));
//  console.log(h1.getAttribute('class'));

h1.classList.add("rojo") // agrega la clase
h1.classList.remove("titulo"); // remueve la clase 
h1.classList.toggle("titulo");// se lo pone o se lo saca depende si lo tiene o no
console.log(h1.classList.contains("rojo")); // devuelve un boolean, true si tiene la clase pasada o false si no

input.value = "456";

const picture = document.createElement('img');
picture.setAttribute('src', 'https://i.pinimg.com/564x/bf/bd/a5/bfbda55942f57c1b6e68614249cc1727.jpg')
console.log(picture);
// pid es la etiqueta <p> que se está reemplazando
pid.replaceChildren(picture);
picture.setAttribute('width', '200px');
picture.setAttribute('height', '300px');

let input1 = document.querySelector('#calculo1');
let input2 = document.querySelector('#calculo2');
let btn = document.querySelector('#btnCalcular');
let btn2 = document.querySelector('#btnCalcular2');
let resultado = document.querySelector('#resultado');



let btnOnClick = (event)=>{ event.preventDefault(); let suma = Number(input1.value) + parseInt(input2.value)
    resultado.innerText = "Resultado de la suma es: " + suma
}
form.addEventListener('submit',btnOnClick);


let precioVenta = document.getElementById('precio');
let li1 = document.getElementById('li1');
let li2 = document.getElementById('li2');
let li3 = document.getElementById('li3');
let cal = document.querySelector('.cal');
let res = document.getElementById('res');
 
 
 
let clic=()=>{
   li2.classList.toggle('yes');
   li3.classList.toggle('yes');
}
let clic1=()=>{
    li2.classList.add('yes');
    li1.classList.toggle('no');
    li3.classList.toggle('no');
 }
 
li1.addEventListener('click', clic);
li2.addEventListener('click', clic1);
li3.addEventListener('click', clic);
if(li1.classList.contains('yes') === true){
    
    let calcularPorcentage =()=>{
        let sumaa= (Number(precioVenta.value)*(100 - Number(li1.value)))/100;
        res.innerText = 'Aplicando el descuento le quedo en: ' + sumaa;
    }         
    cal.addEventListener('click', calcularPorcentage);
}
if(li2.classList.contains('yes') === true){
     let calcularPorcentage =()=>{
         let sumaa= (Number(precioVenta.value)*(100 - Number(li2.value)))/100;
         res.innerText = 'Aplicando el descuento le quedo en: ' + sumaa;
     }         
    cal.addEventListener('click', calcularPorcentage);
}


const users = [];
users.push({ id: 123, name: 'Juanito Alcachofa' });
users.push({ id: 456, name: 'Juanita Alcaparra' });

function solution (users,id){
    let roja = users.find(user => user.id == id)
    if(roja){
       console.log(roja.name) 
    }
    else console.log(false);
}let
solution(users, 456);
solution(users, 999);

// solution(users, 456);
// solution(users, 999);


let numeritos = document.querySelector('.numeritos');
let but = document.querySelector('.but');
let resss = document.querySelector('.resss')
let ingresados = document.querySelector('.ingresados')
let ford = document.querySelector('.ford')


let arr=[];
arr.push([numeritos.value]);
console.log(arr)

let el =0;
let promedio =(arr)=>{
    arr.forEach(element => {
        //console.log(element)
        el +=element
    });
    //console.log(el)
    let prom = el/arr.length
     resss.innerHTML = "el primedio es: " + prom;
}
let devolver =()=>{
    ingresados.innerHTML= "los nuemros ingresados fueron: " + arr;
}
but.addEventListener('click',devolver);


promedio([1,2,3,4])

let mediana =(arre)=>{
    let arre2 = arre.sort((a,b) => a-b);
    console.log(arre2)
    if(arre.length %2 === 0){
       let indexMitadArrePar1 = Math.floor(arre.length /2);
       let indexMitadArrePar2 = Math.floor(arre.length /2) -1;
       console.log(arre[indexMitadArrePar1])
       console.log(arre[indexMitadArrePar2])
       let medianaPar = (arre[indexMitadArrePar1] + arre[indexMitadArrePar2]) /2
       console.log(medianaPar)

    }
    else if(arre.length %2 === 1){
        let idexMitadArreImpar = Math.floor(arre.length /2);
        console.log(arre[idexMitadArreImpar])
        let medianaImpar = " la mediana de la lista es: " + arre[idexMitadArreImpar];
        return medianaImpar
    }
    else console.log('nose')
}


mediana([1,2,3,4,5,6,7,8,9,1000000,11,12,13,14]);


const calculateModal = (arr) => {
	let obj = {};
	//Se hace un recorrido del array con map
	arr.map((el) => {
		/*
		Por cada elemento en el array, el método retornará dos cosas dependiendo de la condición en el ternario, si el elemento existe en el objeto, se le va a incrementar el contador de dicho objeto, si no, se crea la propiedad elemento en el objeto y se le asigna un 1.
		*/
		el in obj 
        ? (obj[el] += 1) 
        : (obj[el] = 1);
	});
	/*
	La función Math.max() encuentra el elemento más grande de una lista - arreglo, para ello, convertimos el objeto obj en un array y buscamos en todos los elementos del nuevo array con el spread operator (...)
*/
	console.log(Math.max(...Object.values(obj)));
};

let calcularModa2 = (lista)=>{
    const listaCount ={};
    
    for (let i = 0; i < lista.length; i++) {
    const element = lista[i];
    
    
    if(listaCount[element]){
        listaCount[element] += 1;
    }else{
        listaCount[element] = 1;
    }
    
 }
 const listaArray = Object.entries(listaCount)
 const objectArray = listaArray.sort((a,b) => a[1]-b[1])
 const listaObjetoArrayMaxNumbre = objectArray[listaArray.length-1]
 console.log('la modal es: ' + listaObjetoArrayMaxNumbre[0])
 
}

calcularModa2([1,2,3,34,4,5,5,5,6,6,7,87])



//En este desafío debes convertir las llaves y valores de un objeto en propiedades (id y name) de un objeto dentro de un array.

const obj = {
    123: 'Juanito Alcachofa',
    456: 'Juanita Alcaparra',
  };
  function solution(obj) {
    let arr = [];
  
    let set = Object.entries(obj);
    set.forEach(element => {
      arr.push({
        "id": element[0],
        "name": element[1],
      })
    });
      return arr;
  }
  
  solution(obj);

 






