
let parrafoUno = document.querySelector('.primer-parrafo');
let parrafoDos = document.querySelector('.segundo-parrafo');
let h1 = document.querySelector('h1')
let input = document.querySelector("input");
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

