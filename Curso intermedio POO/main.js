const juan = {
    name:"Juanito",
    age:18,
    approvedCourses: ["Curso 1"],
    addCourse(newCourse){
        this.approvedCourses.push(newCourse);
    },
}

console.log(Object.keys(juan));
console.log(Object.getOwnPropertyNames(juan));
console.log(Object.entries(juan)[3][1]);
console.log(Object.values(juan));
console.log(Object.getOwnPropertyDescriptors(juan));
console.log(Object.entries(juan));


console.log("desdeaca")

Object.defineProperty(juan,"pruebaNasa",{
    value:'extraterrestres',
    enumerable:false,
    writable:false,
    configurable:false,
});
Object.defineProperty(juan,"navigator",{
    value:'Chrome',
    enumerable:false,
    writable:true,
    configurable:true,
});

Object.defineProperty(juan,"editor",{
    value:'Visual Studio Code',
    enumerable:true,
    writable:false,
    configurable:true,
});
Object.defineProperty(juan,"terminal",{
    value:'WSL',
    enumerable:true,
    writable:true,
    configurable:false,
});


// Object.seal(); al objeto que se pase como parametro pone false todas los propiedades de configurable
// Object.freeze(); al abojeto que se pase como parametro pone false configurable y writable

console.log(Object.getOwnPropertyDescriptors(juan));


const obj1 ={
    a: "a",
    b:"b",
    c: {
        d:"d",
        e:"e",
    },
};

const obj2 = {};

// con esta forma si hay objeto por dentro le cambia a ambos el valor si se modifica el objeto adentro del objeto
for(prop in obj1){
    obj2[prop] = obj1[prop]
}

const obj3 = Object.assign(obj1)// es lo mismo que hacer el for, tmb se modifica si hay oibjeto dentro de objeto

const obj4 = Object.create(obj1);

const obj5 ={...obj1}

// Las variables son referencias a un espacio en memoria. 🎩 Los navegadores web usan dos tipos de memorias: Stack y Heap. 📁 La memoria Stack es muy rápida, pero sin tanto espacio. Aquí se guardan los valores primitivos (booleanos, strings, números...). 🌪 La memoria Heap es más lenta, pero permite guardar enormes cantidades de información (son como los tornados: grandes, lentos y desordenados). En esta memoria guardamos los valores de los objetos ({...}).

// lo mejor es usar structuresClone()  con esta funcion se puede copiar el objeto y modificarlo sin modificar el original
 const copy = structuredClone(obj1);

//JSON.stringify copia al objeto pero a manera de string
//JSON.parse convierte un string en un objeto
// si hacemos esto los metodos no los copia
const stringifiedComplexObj = JSON.stringify(obj1);
const objATravezDeString = JSON.parse(stringifiedComplexObj);




// recursividad
function isObject(subject){
    return Object.prototype.toString.call(subject) == "[object Object]";
};
function isArray(subject){
    return Array.isArray(subject)
};

function deepCopy(subject){
    let copySubject;
    const subjectIsObject = isObject(subject);
    const subjectIsArray = isArray(subject);

    if(subjectIsObject){
        copySubject = {};
    }else if(subjectIsArray){
        copySubject = [];
    }else {
        return subject
    }

    for (key in subject) {
       const keyIsObject = isObject(subject[key]);


       if(keyIsObject){
        copySubject[key] = deepCopy(subject[key])
       } else{
        if(subjectIsArray){
            copySubject.push(subject[key]);
        } else{
            copySubject[key] = subject[key]
        }
       }
    }

    return copySubject;
}

// RORO es mandar un objeto para q no importe el orden



function requiredParam(param){
    throw new Error(param + " es obligatorio");
}



function LerningPath({
    name = requiredParam("name"),
    courses = [],
}){

    this.name =name;
    this.courses = courses;
    

    const private = {
        "_name": name,
        "_courses": courses,

    };
    const public = {
        get name(){
            return private["_name"];
        },
        set name(newName){
            if(newName.length !== 0){
                private["_name"]= newname;
            } else {
                console.error("tu nombre debe tener algun car\u00E1cter")
            }
            return private["_name"];
        },
        get courses(){
            return private["_courses"];
        },
    };
}

// INSTANCE OF

            function Roro({
                name = requiredParam("name"),
                age= requiredParam("age"),
                email,
                twitter,
                instagram,
                facebook,
                approvedCourses = [],
                learningPaths = [],
            } = {}){

                this.name = name;
                this.age = age;
                this.socialMedia = {
                    twitter,
                    instagram,
                    facebook,
                };
                this.email = email;
                this.approvedCourses = approvedCourses;
                
                const private = {
                    "_learningPaths":[],
                }

                Object.defineProperty(this, "learningPaths",{
                    get(){
                        return private["_learningPaths"]; 
                    },
                    set(newLP){
                        if (newLP instanceof LerningPath){
                            private["_learningPaths"].push(newLP);
                        }else {
                            console.warn("te pillamos")
                        }
                    }
                    
                })

              
                    for (learningPath in learningPaths){
                        this.learningPaths = learningPaths[learningPath]
                    }
                    
                }
            
                
 // DUCK TYPING es la forma de programar donde identificamos  los elementos dependiendo de los metodos y atributos que tengan por dentro
                // const private ={
                //     "_name":name,
                //     "_learningPaths":learningPaths,
                // }
                // const public ={
                // age,
                // email,
                // socialMedia:{
                // twitter,
                // instagram,
                // facebook,
                //         },
                // approvedCourses,
            
                // get name(){
                //     return private["_name"];
                // },
                // set name(newName){
                    //     if(newName.length !== 0){
                //         private["_name"]= newname;
                //     } else {
                //         console.error("tu nombre debe tener algun car\u00E1cter")
                //     }
                //     return private["_name"];
                // },
                // get learningPaths(){
                //     return private["_learningPaths"];
                // },
                // set learningPaths(newLearningPaths){
                //    if(!newLearningPaths.name){
                    //     console.warn("tu LP no tiene propiedad name");
                //     return;
                //    }
                //    if(!isArray(newLearningPaths.courses)){
                //     console.warn("tu lp no tiene lista de cursos");
                //     return;
                //    }
            
                //    if(!newLearningPaths.courses){
                    //     console.warn("tu LP no tiene courses");
                //     return;
                //    }
                //     return private["_learningPaths"].push(newLearningPaths);
                // } 
            
                // // readName(){
                // //   return private["_name"];
                // // },
            
                // // changeName(newname){
                // //     private["_name"]= newname;
                // // },
            
                // };
            
                // Object.defineProperty(public, "readName", {
                //     configurable: false,
                //     writable:false,
                // });
                // Object.defineProperty(public, "changeName", {
                //     configurable: false,
                //     writable:false,
                // });
                
                // return public;
            



            

const escuelaWeb = new LerningPath({name:"Escuela de desarrollo Web"});
const escuelaData = new LerningPath({name:"Escuela de Data Science"});

const ramon =  new Roro({
    name:'ramon', 
    age:56,
    email:"raammmmmmmmon@gmail.com", 
    twitter:"ramonsito",
    learningPaths:[
        escuelaData,
        escuelaWeb,
    ],
    });
