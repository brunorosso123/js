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