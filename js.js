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