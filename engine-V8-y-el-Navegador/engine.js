// JavaScript Engine: Es el motor de JS, siempre corre en el navegador. Su función es interpretar el código JavaScript y convertirlo a Machine Code para que la máquina pueda entenderlo.

// Just in time compiler: Es la compilación en tiempo real que sucede en el proceso del Engine.



// ¿Qué es V8? V8 es un motor open-source escrito en C++ para compilar JavaScript y WebAssembly en código máquina. Esto quiere decir que traduce JavasScript a un código puramente digital capaz de ser interpretado por la CPU donde se ejecuta.
// El motor de JavaScript V8 es lanzado en el 2008, a traves del navegador de Google Crhome, pero especialemte nacio para que la aplcacion Google Maps corriera mas rapido. V8 ayuda a que JS corra de manera más rápida, con esto podemos crear aplicaciones más robustas y rápidas.

// Una vez el motor recibe un archivo JS genera un Global enviroment
// En el Global enviroment se genera un Global object que es igual a window
// También se genera una variable this
// this depende del contexto, en el entorno global this es igual al objeto global
// Ya despues de generado el entorno global, comienza a correr nuestro código en el contexto de ejecucion, a través de un stack de tareas apiladas
// Una vez que el motor comienza a interactuar con el navegador, genera un parseo del documento completo, para encontrar las keywords y las pasa al AST (abstract syntax tree)
// AST Explorer

// Una vez se tiene el AST, el motor lo pasa al interpreter para retornar bytecode puede ser entendido por la máquina
// Si en la interpretación del AST ve mucho código que se repite y que se puede optimizar entra el profiler o monitor, y optimiza el codigo y lo regresa compilado como bytecode para que la máquina lo pueda comprender. Es justo en este paso donde aparece el hoisting, donde el motor en su función de optimizacion reinterpreta el código de una mejor forma y se pueden presentar errores de programacón.
// El hoisting solo sucede con variables y funciones que se mandan a llamar.


//Una estricta definición de hoisting sugiere que las declaraciones de variables y funciones son físicamente movidas al comienzo del código,asignandolas en memoria dentro de un contexto de ejecucion.


// Memory Heap

// Donde se almacena los valores de las variables y las funciones
// Se destina un espacio en memoria para las variables.
// La información en el memory heap, No se guarda de manera lineal
// El memory heap se guarda en la RAM, y esta es una memoria volátil (Es decir, no puede preservar la información una vez el computador se apaga) Por lo que, si se cierra el navegador o se apaga el computador, lo que haya estado en el memory heap se pierde.


// Callstack

// Como se mandan a llamar las variables y las funciones
// Las tareas en el callstack se apilan de abajo hacia arriba.
// Se llaman de la última que mandamos a llamar hacia abajo
// En la base de la pila reposa el Global Object
// Si una función llama a otra, la pone encima de la pila.
// Se ejecuta una tarea a la vez (sincronía)
// Una vez que se van ejecutando las tareas se van retirando de la pila
// Al ejecutar todas las tareas se retira el Global object.


//Garbage Collection: limpia la memoria de los datos no utilizados para no sobrecargarla y seguir trabajando sin problemas.
//En lenguajes de alto nivel como Java y JavaScript, los programadores no necesitan asignar o liberar memoria explícitamente. La memoria JavaScript se asigna cuando se crean cosas (objetos, cadenas, etc.) y se libera automáticamente cuando ya no se usan. Este proceso se llama Garbage Collection.
//Si hace el proceso de Mark and Sweep para limpiar estas variables que fueron renombradas como dice degranda , Cuando hay un ciclo for las variable siempre se renombrar y las anteriores se quedan hay pero bueno para eso esta Garbage collection que limpia estas variables inservibles.
//El stack overflow se genera cuando el call stack se llena completamente (pila de tareas) .Esto pasa cuando se genera o se trabaja con bucles infinitos, recurcividad y funciones.Entonces este entra en stack overflow , tenemos que tener cuidado de ocacionar estos stack!!!!


console.log('taco 1');
console.log('taco 2');
console.log('taco 3');
setTimeout(()=>{
    console.log('torta');  
},0)
console.log('taco 4');



// //El motor JS V8
// Resumen Aquí dejo un video por si quieren profundizar Link Una vez que Chrome recibe el código o los scripts javascript en la página web, el motor JS V8 comienza a analizarlo. Primero, analizará parcialmente el código comprobando errores de sintaxis. Si no encuentra ninguno, comienza a leer el código de arriba a abajo. Su objetivo final es convertir el código javascript en código de máquina que la computadora pueda entender. Pero antes de comprender qué hace exactamente con el código, debemos comprender el entorno en el que se analiza.

// Event Loop
// Tarea asignada para mover del Tas Queue al Stack, Solo si el Stack esta vacío

// Memory Heap (Montón)
// Donde se almacena los valores de las variables y las funciones
// Se destina un espacio en memoria para las variables.
// La información en el memory heap, No se guarda de manera lineal
// EL MONTÓN

// El primer contenedor en el entorno, que también forma parte del motor V8 JS Engine, se denomina "montón de memoria". A medida que el motor JS V8 encuentra variables y declaraciones de funciones en el código, las almacena en el montón .

// Call Stack (Pila) = El ultimo que entra es el primero en salir
// Como se mandan a llamar las variables y las funciones
// Las tareas en el callstack se apilan de abajo hacia arriba.
// Se llaman de la última que mandamos a llamar hacia abajo
// En la base de la pila reposa el Global Object
// Si una función llama a otra, la pone encima de la pila.
// Se ejecuta una tarea a la vez (sincronía)
// Una vez que se van ejecutando las tareas se van retirando de la pila
// Al ejecutar todas las tareas se retira el Global object.
// LA PILA

// El segundo contenedor en el entorno se denomina "pila de llamadas". También es parte del motor JS V8. Cuando JS Engine encuentra un elemento procesable, como una llamada a función, lo agrega a la pila .

// Task Queue (Cola) = El primer que entra es el primero en salir
// Cola de tareas, se maneja la concurrencia, se agregan las tareas que ya están listas para pasar el stack (Pila). El stack debe de esta vacío

// MicroTask Queue (Micro Tareas)
// Las promesas tienen otra forma de ejecutarse y una prioridad superior

// Web APIs
// JavaScript del lado del cliente: setTimeout, XMLHttpRequest, File reader, DOM

// Node: fs, https

// Garbage Collection
// limpia la memoria de los datos no utilizados para no sobrecargarla y seguir trabajando sin problemas.