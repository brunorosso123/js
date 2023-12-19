let nombre = "bruno";
let apellido = "nose";
let lorem = "lorem aslk;asdlk;kalds aksksks dkkd   ;;ss  dk dkd l;s dkls"
//template string 
let saludo = `Hola, yo soy ${nombre} ${apellido}.`
console.log(saludo);
// en mdn se pueden buscar metodos y propiedades de los objetos
console.log(
    nombre.length, // devuleve la cantidad de letras que tiene nombre
    nombre.toUpperCase(), // convierte el texto en mayuscula
    apellido.toLowerCase(),// convierte el texto en minuscula
    lorem.includes("dk"),
    lorem.trim(),
    lorem.split("dkkd")
    );

    //======================================================NUMEROS=========================================================

    let a = 2;
    let b = 9;
    let c = 7.9876
    let d = "6.83637"

    console.log(
        c.toFixed(1),
        parseFloat(c),
        parseInt(c),
        typeof(c), // muestra que tipo de valor tiene
        c + parseInt(d) // al d se convierte a numero, se llama casting (cambio de tipo de dato) tmb se podria usar parsefloat
    );


    //==================================================FUNCTION===============================================

    /*Una funcion es un bloque de codgo,
    autocontenido, que se puede definir una vez
    y ejecutar en cua\lquier momento.
    Opcionalmente, una funcion puede aceptar parametros y devolvernos un valor 
    
    Las funciones en JS son un tipo especial de objeto*/
    // funcion declarada
    function estoEsUnaFuncion(){
        console.log("uno");
        console.log("dos");
    }
    estoEsUnaFuncion();

    function otraFuncion(){
        console.log("tres");
        console.log("cuatro");
        return 19;
        console.log("no se va a ver"); // no se ve porque despues del retur no sigue leyendo
    }
    let valorDeLaFuncion = otraFuncion();
   console.log(valorDeLaFuncion);


   // a las funciones se le pueden pasar parametros
function saludar(nombre, edad){
    console.log(`Hola mi nombre es ${nombre} y tengo ${edad} anios.`);
}
saludar("Kenie",7);


//=========================== funcion declarada vs funcion expresadas========================================

funcionDeclarada();
function funcionDeclarada(){
    console.log("Esto es una funcion declarada, puede invocarse en cualquier parte de nuestro codigo, incluso antes de que la funcion sea declarada");
}
funcionDeclarada();
// la funcion declarada no importa si se llama antes o despues


//funcion anonima
const funcionExpresada = function(){
 console.log("esto es una funcion expresada, es decir una funcion que se le ha asignado como valor a una variable, si invocamos esta funcion antes de su definicion js nos dira cannot access")
}
funcionExpresada();

//================================== ARRAYS======================================================================
const ab = [1,true,false,"hola",[2,3,4,['a','array dentro de otro dentro de otro','f']]];
console.log(ab[4][3][1]);
// otra forma de crear arrays
const bc = Array.of("b","c",2);
console.log(bc);
// o tmb puede ser
const be = Array(4).fill(false);
console.log(be);

const colores = ["rojo","verde","amarrilo","naranja"];
colores.push("negro");
console.log(colores);
colores.pop();
console.log(colores);
// con forech recorrer el arrgelo y se pasa colores como parametro y el segundo, en este caso index es para que cada li tengo su id
colores.forEach(function(pasando,index){
    console.log(`<li id="${index}">${pasando}</li>`)
});

const articulos = [
    {nombre:"bici", costo:"3000"},
    {nombre:"tv rota", costo:"30"},
    {nombre:"tv", costo:"2500"},
    {nombre:"libro", costo:"200"},
    {nombre:"celular", costo:"11000"},
];
let articulosFiltrados = articulos.filter(function(articulo){
   return articulo.costo <= 500;
});
//filter nos deja filtrar, devuelve los valores coincidentes de la matrix de la collecion, verifica todos
console.log(articulosFiltrados);

//map nos ayuda a ver por categoria
let nombreDeArticulos = articulos.map(function(articulo){
    return articulo.nombre;
});
console.log(nombreDeArticulos);


//find devuelve el primer valor que coincida

let buscarArticulo = articulos.find(function(articulo){
    return articulo.nombre === "celular";
});
console.log(buscarArticulo);

//lo mismo para foreach
let verObjetos = articulos.forEach(function(articulo){
   console.log(articulo.nombre);
});

// some devuelve vdd o falso para articulos que cumplan la validacion
var articulosBaratos = articulos.some(function(articulo){
    return articulo.costo <= 700;
});
console.log(articulosBaratos);

// ==================================================OBJETOS==============================================================

const bruno = {
    nombre: "bruno",
    apellido: "nose",
    edad:31,
    pasatiempos: ['hacer ejercicio', 'leer mangas'],
    soltero: false,
    contacto:{
        email:"jkhladsjklhdaskl@gmail.com",
        movil: 23198321890091283
    },
    saludar:function(){
        console.log('hola');
    }
}

console.log(bruno);
console.log(bruno.nombre);
console.log(bruno.apellido);// al ser atributos por estar dentro d eun objeto se pueden llamar por punto
// a las funciones dentro del objeto se les metodos
console.log(bruno.contacto.email);
bruno.saludar();
console.log(Object.keys(bruno));//retorna todas los atributos que tenga el objeto
console.log(Object.values(bruno)); //retorna los valores de los atributos
console.log(bruno.hasOwnProperty("nombre"));// devuleve true si el objeto bruno tiene el atributo nombre adentro sino devuelve false



// ============================CONDICIONALES ========================================================================

let hora = 11.6;
if(hora >= 0 && hora < 5){
    console.log("Dejame dormir");
}else if (hora > 5 && hora <= 11){
    console.log("buenos dias");
}else if(hora > 11 && hora <=18){
    console.log("buenas tardes");
}else{
    console.log("buenas noches ");
}

//operad ternario 
let edad = 19
let eresEdad = (edad >= 18) ? "Eres mayor de edad" : "Eres menor de edad";
console.log(eresEdad);


// for 
let numeros = [10,20,30,40,50,60,70,80,44];

for (let i = 0; i < numeros.length; i++) {
     console.log(numeros[i]);
}

// for in es para OBJETOS - recorre propiedades de un obejto

for (const llave in bruno) {
  console.log(`key: ${llave}, Value:${bruno[llave]}`);
}

//for of permite recorrer todos los elementos de cualquier objetoi que sea iterable en js (arrays, strings)

for (const elemento of numeros) {
    console.log(elemento);
}

//===================== try carch ================================================
try {
    // let numero = "y";
    let numero = 3;
if (isNaN(numero)) {// isnan es una metodo donde evaluas si el parametro es un numero 
    throw new Error('el caracter introducido no es un numero');
}
console.log(numero * numero);
} catch (error) {
    console.log(`se produjo el siguiente error: ${error} `)
}



// ejercicio para saber si un numero es par o impar
let num = [1,2,3,4,5,6,7,8,9,10,11];

for (let i = 0; i < num.length; i++) {
    if (i%2 != 1) {
        console.log(num[i])
    }
   continue;
   // breack en caso q despues del primer ciclo se detenga 
    
}


// ========================================================= DESTRUCTURACION=================================================================

// se trata de volver a convertir en variable los datos de un array u objeto, estilo capicua es decir:

const alguien = {
    nomb: "jaimico",
    apelli:"suarez",
    eda:10
};

let{nomb,apelli,eda} = alguien;
console.log(nomb,apelli,eda);
console.log(alguien);



//========================================================OBJETOS LITERALES===================================================================================
// se pueden declarar variables fuera de un objeto y que el mismo tome esas mismas variables


let nam = 'nelson',
    ag = 18;

const ind = {
    nam,
    ag,
    raza: "callejero",
    //en ves de poner ej ladrar:function(){console.log("guau guau~!!!")}
    ladrar(){
        console.log("Guau guau~!!!")
    }
};
console.log(ind);
ind.ladrar();

//============================================================= PARAMETRO REST================================================

// son parametros que recibe una funcion 
function sumar(a,b, ...c) {
    let resultado = a + b;
    c.forEach(function(n) {
        resultado += n
    });
    return resultado;
};

console.log(sumar(1,2));
console.log(sumar(1,2,3));
console.log(sumar(1,2,3,4));
console.log(sumar(1,2,3,4,5));
console.log(sumar(1,2,3,4,5,6));

//============================================================= spread operator================================================
//se puede ejecutar en cualquier sentencia de nuestro codigo

const arr1 = [1,2,3,4,5],
    arr2 = [6,7,8,9];

console.log(arr1,arr2);
const arr3 = [...arr1, ...arr2];
console.log(arr3);

//================================================================ARROW FUNCtion=====================================================
let salu = function(nombre) {
    console.log(`Hola ${nombre}`);
};
salu('Irma');

let salu2 = nombre => console.log(`Hola ${nombre}`);
salu2("Raul");

// si se reciben dos parametros no se le puede sacar los parentesis

let summa = (a,b) => a + b;
console.log(summa(2,3));


let numm = [1,2,3,4,5];
numm.forEach(function(el,index) {
    console.log(`${el} esta en la posicion ${index}`)
});

numm.forEach((el,index) => console.log(`${el} esta en la posicion ${index}`));


//==========================================PROTOTIPOS POO==============================
/* 
    clases: modelo a seguir
    Objetos:es una instancia de una clase
    atributos:es una caracteristica o propiedad del obejto(son variables dentro de un objeto
    metodos:son acciones que un objeto puede realizar(son funciones dentro de un objeto
*/

//funcion constructora

// function Animal(nombre, genero){
// atributos version 1
// this.nombre = nombre;
// this.genero = genero;
// 
// metodos
// this.sonar = function(){
    // console.log("Hago sonidos porque estoy vivo");
// }
// };
// const snoopy = new Animal("snoopy","Macho"),
// lolaBunny = new Animal("Lola Bunny", "Hembra");
// 
// console.log(snoopy);
// console.log(lolaBunny);

function Animal(nombre, genero){
//atributos version 2 / asignamos los metodos al prototipo no a la funcion como tal
this.nombre = nombre;
this.genero = genero;
};

//metodos agregados al prototipo de la funcion constructora
Animal.prototype.sonar = function(){
    console.log("Hago sonidos porque estoy vivo");
}




//========================== HERENCIA PRTOTIPICA====================================================

function Perro(nombre, genero, tamanio) {
    this.super = Animal; 
    this.super(nombre,genero);
    this.tamanio = tamanio;
};
// hay que hacer que perro sea una instancia de animal
//perro esta  heredando de animal
Perro.prototype = new Animal();
// hay que igualarlo al mismo constructor
Perro.prototype.constructor = Perro;


// sobreescritura del metodo del prototipo padre al hijo
Perro.prototype.sonar = function() {console.log('Hago guau guau porque estoy vivo')};


const snoopy = new Perro("snoopy","Macho", "mediano"),
lolaBunny = new Animal("Lola Bunny", "Hembra");

//=========================================================== CLASES Y HERENCIA==========================================
// es la funcion constructora pero mas facil y mas legible

class Animel{
    //el constructor de una clase es un metodo especial que se ejecuta en el momento de la instancia clase
    constructor(nombre,genero){
        this.nombre = nombre;
        this.genero = genero;
    }
    sonar(){ console.log("hago sonidos");}
    saludar(){console.log(`Hola me llamo ${this.nombre}`);}
}

// herencia en clases

class Gato extends Animel{
    constructor(nombre,genero,tamanio){
        super(nombre,genero);
        this.tamanio = tamanio;
        this.raza = null
    }
    sonar(){console.log("soy un gato y hago miau miau")};
    //un metodo estatico se pueden ejecutar sin necesidad de instanciar la clase
    static queEres(){console.log("los gatos son felinos de 4 patas, 2 ojos y una boca")};
    // los setters y getters son metodos expeciales que nos permiten establecer y obtener valores de atributos de nuestra clase
    //la raza se puso nula

    get getRaza(){
        return this.raza
    }

    set setRaza(raza){
        this.raza = raza;
    }

};


const mimi = new Gato("Mimi","Hembra","chico"),
scooby = new Animel("Scooby", "Macho");

Gato.queEres();
//mimi.queEres(); no se puede ejecutar, los metodos statics son solo para la clase
console.log(mimi);
mimi.sonar();
mimi.saludar();
console.log(scooby);
scooby.saludar();
console.log(snoopy);
console.log(lolaBunny);
snoopy.sonar();
console.log(mimi.getRaza);
mimi.setRaza = "normalita";
console.log(mimi.getRaza);


//Objeto console

console.log(console);//muestra un registro de lo que a pasado en nuestra ap[licacion 
console.error("esto es un error"); // al dar errpr va a saltar este texto
console.warn("esto es un aviso"); // sale un aviso en la consola
console.info("esto es un mensaje informativo");
// console.clear(); limpia la consola
console.log(document); // document es la representacion del documento de html a travez de js, mediante los nodos y elementos podemos acceder a las etiquetas de html
console.dir(window);// muestra todas las propiedades, metodos y constructores

console.group("esto es un grupo de console"); // arma un grupo de los console
console.log("js");
console.log("html");
console.log("css");
console.log("angular");
console.log("react");
console.groupEnd();

// time cuanto tiempo demora en ejecutar la funcion
console.time("veremos cuanto tarda mi pc");
const arreglo = Array(1000000);
for (let i = 0; i < arreglo.length; i++){
arreglo[i]=i;
};
console.timeEnd("veremos cuanto tarda mi pc");

let x = 3,
y =2,
pruebaXY = "Se espera que X siempre sea menor que Y";

console.assert(x<y,{x,y,pruebaXY});

let nombree = "Jhon",
apellidoo = "Mircha",
edadd = 35;

console.log(nombree,apellidoo,edadd);

//=====================OBJETO DATE ==========================================
console.clear();
console.log(Date());

let fecha = new Date()
    console.log(fecha.getDate()); // te da el dia del mes
    console.log(fecha.getDay()); //los dias de la semana los representa de domingo a sabado siendo 0 domingo
    console.log(fecha.getMonth()); // enero es 0
    console.log(fecha.getFullYear());
    console.log(fecha.getHours());
    console.log (fecha.getMinutes());
    console.log(fecha.getSeconds());
    console.log(fecha.getMilliseconds());
    console.log(fecha.toDateString());// devuelve la fecha sin el gmt
    console.log(fecha.toLocaleString());// en formato de numeros
    console.log(fecha.toLocaleDateString()); // sin la hora
    console.log(fecha.toLocaleTimeString()); // solo la hora
    console.log(fecha.getUTCDay());// ambos pasan referencia al gmt  a 0, es decir que muestra el parametro sin la diferencia horaria
    console.log(fecha.getUTCHours());// ambos pasan referencia al gmt  a 0, es decir que muestra el parametro sin la diferencia horaria
    console.log(Date.now()); // cuantos milisegundos pasaron desde 1970, se llama time stamp
    let cumpleBruno = new Date (1992, 10, 5 );
    console.log(cumpleBruno);

    // ============================OBJETO MATH===========================
    // es un objeto estatico, cada vez q lo queramos invocar tenemos que invocar al prototipo

    console.log(Math);// aparece todoas las funciones y parametrso que tiene la funcion
    console.log(Math.PI); // muestra el numero pi
    console.log(Math.abs(-7.8)); // muestra el basoluto del numero pasado entre parametros
    console.log(Math.ceil(8.9));// lo redonde al numero entero posterior inmediato
    console.log(Math.floor(6.9)); //lo redondea al numero entero anterior
    console.log(Math.round(6.4)); // redonde al numero entero mas cercano, enterior o posterior
    console.log(Math.sqrt(81)); // para allar la raiz cuadrada
    console.log(Math.pow(2, 5)); // para allar la potencia en este caso 2 a la 5
    console.log(Math.sign(-7.8)); // devuelve -1 si es negativo 1 si es positivo 0 sale 0
    console.log(Math.random()); // da un numero random
    console.log(Math.round(Math.random() * 1000));

    //==================================================== OPERADOR DE CORTOCIRCUITO==============================
    // cortocircuito OR cuando el valor de la izquierdca en la expresion siempre pueda validar a true, es el valor que se crgara por defecto

    function saludar(nombre){
        nombre = nombre || "desconocido"; // parametro cortocircuito
        console.log(`Hola, ${nombre}`);
    }
    saludar("Bruno");
    saludar();
    // cortocircuito AND cuando el valor de la izquierda en la expresion siempre pueda validad false, es el valor que se cargara por defecto

    console.log(false && "este es el valor de la derecha"); // como la primera es false manda ese parametro
    console.log(-2 && 'la derecha'); // en este caso es un numero y da positivo, el valor que salta es el de la derecha

    //================= ALERT CONFIRM PROMPT====================================================
    // console.log(window);
    // let alerta = alert("esto es una alerta"),
        // confirmacion = confirm("esto es una confirmacion"),
        // aviso = prompt("ingrese un valor");
// 
    //===================================== Expresiones regulares ==============================
    // son una secuencia de caracteres que forma un patron de busqueda, principalmente utilizada para la busqueda de patrones de cadena de caracteres

    let cadena = "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text."

 let exprReg = new RegExp("are", "ig");// i ignorma entre mayusucula y minuscula y g busca todas, no se queda en la primera coincidencia
 console.log(exprReg.test(cadena));
 console.log(exprReg.exec(cadena));
 // o tmb se puede escribir
 let ExpReg2 = /slightly/i;

 console.log(ExpReg2.test(cadena));
 console.log(ExpReg2.exec(cadena));


 let ExpReg3 = /\d/;
 console.log(ExpReg3.test(cadena));
 console.log(ExpReg3.exec(cadena));


/*
Coincidencias Basicas
.       - Cualquier Caracter, excepto nueva linea
\d      - Cualquier Digitos (0-9)
\D      - No es un Digito (0-9)
\w      - Caracter de Palabra (a-z, A-Z, 0-9, _)
\W      - No es un Caracter de Palabra.
\s      - Espacios de cualquier tipo. (espacio, tab, nueva linea)
\S      - No es un Espacio, Tab o nueva linea.

Limites
\b      - Limite de Palabra
\B      - No es un Limite de Palabra
^       - Inicio de una cadena de texto
$       - Final de una cadena de texto

Cuantificadores:
*       - 0 o Más
+       - 1 o Más
?       - 0 o Uno
{3}     - Numero Exacto
{3,4}   - Rango de Numeros (Minimo, Maximo)

Conjuntos de Caracteres
[]      - Caracteres dentro de los brackets
[^ ]    - Caracteres que NO ESTAN dentro de los brackets

Grupos
( )     - Grupo
|       - Uno u otro
*/ 
//[\w.'+_-]+@[a-zA-z-.]+.[a-zA-z]+ lo hice en regexr.com

//=====================================FUNCIONES ANONIMAS AUTOEJECUTABLES=========================================
// funciones donde englobas las funciones que quieres ejecutar

(function () {
    console.log("mi primer ife")
})();

(function (d,w,c) {
    console.log("mi segunda ife");
    console.log(d);
    c.log("abreviando console")
})(document,window,console);









