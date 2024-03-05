const natalia = {
    name: "Natalia",
    apellido: "Que se yo",
    age: 20,
    cursosAprobados: [
        "Curso definitivo de HTML y CSS",
        "Curso Practico de HTML y CSS",
    ],
    //vamos a crear un metodo
    aprobarCurso(nuevoCursito) {
        this.cursosAprobados.push(nuevoCursito); // this hace referencia a este mismo objeto (natalia)

    }
};// objeto literal
console.log(natalia)
natalia.cursosAprobados.push("Curso de Responsive Design");
natalia.name = "Nath"; // para cambiar el nombre
//tambien se puede modificar numeros
natalia.age +=1;

// asi es la sintaxis de usar metodos

natalia.aprobarCurso("CSS Grid");

// prototipo

function Student(name, apellido, age, cursosAprobados) {
    this.name = name;
    this. apellido = apellido;
    this.cursosAprobados = cursosAprobados;
    this.age = age;
};

// el metodo se puede crear por fuera como este o por dentro con this.aprobarCurso = funcion()...
Student.prototype.aprobarCurso = function(nuevoCursito){
    this.cursosAprobados.push(nuevoCursito);
};


// instancia de prototipo

const juanita = new Student(
    "juanita",
    "Jimenez",
    25,
    [ 
        "Curso de Introduccion de Videojuegos",
        "Curso de creacion de personajes",
    ],
);
juanita.aprobarCurso("Curso Unreal Engine");


class Student2 {
    constructor ({
        name,
        apellido,
        age,
        cursosAprobados =[] // esto se puede igualar a un array, si no se le pone nada devuelve el array vacio
    }){
        this.name = name;
        this.apellido = apellido;
        this.age = age;
        this.cursosAprobados = cursosAprobados;
    }

    aprobarCurso(nuevoCursito){
        this.cursosAprobados.push(nuevoCursito);
    } 
}


// se llama roro , recibe un objeto y devuelve un objeto
const miguelito = new Student2({
    name : 'miguel',
    apellido : 'alvartez',
    age: 28,
    cursosAprobados: [ 
        "principios de nose",
        "otro curso",
    ],
});
        // clase 13 de platzi 

        function videoPlay(id){
            const urlsecreta = "https://platziultrasecreto.com/" + id;
            console.log('se esta reproduciendo desde la url' + urlsecreta );
        }
        function videoStop(id){
            const urlsecreta = "https://platziultrasecreto.com/" + id;
            console.log('pausamos desde ' + urlsecreta );
        }



        class Comment{
            constructor({
                content,
                studentName,
                studentRole = "estudiante",
            }){
                this.content = content;
                this.studentName = studentName;
                this.studentRole = studentRole;
                this.likes = 0;
            }

            publicar(){
                console.log(`${this.studentName} (${this.studentRole})`);
                console.log(this.likes + ' likes');
                console.log(this.content);
            }
        }
// export es para exportarlo
class PlatziClass{
    constructor({
        name,
        videoID,
    }){
        this.name = name;
        this.videoID = videoID;
    }

    reproducir(){
        videoPlay(this.videoID);
    }
    pausar(){
        videoStop(this.videoID);

    }

}




class Student3 {
    constructor({
        name,
        email,
        username,
        twitter = undefined,// se pone como opcional por eso el undefined
        instagram =undefined,
        facebook = undefined,
        approvedCourses =[],
        learningPaths=[],
    }){
        this.name=name;
        this.email=email;
        this.username=username;
        this.socialMedia = {
            twitter,
            instagram,
            facebook,

        }
        this.approvedCourses =approvedCourses;
        this.learningPaths=learningPaths;
    }

    publicarComentario(commentContent){
        const comment = new Comment({
            content: commentContent,
            studentName: this.name,

        });
        comment.publicar();
    }
    

};
class TeacherStudent extends Student3{
    constructor(props){
        super(props);
    }
    approveCouse(newCourse){
        this.approveCouse.push(newCourse);
}
    publicarComentario(commentContent){
    const comment = new Comment({
        content: commentContent,
        studentName: this.name,
        studentRole:"teacher",

    });
    comment.publicar();
}


}
class FreeStudent extends Student3{
    constructor(props) {
        super(props);
    }

    approvedCourse(newCourse){
        if(newCourse.isFree){
            this.approvedCourses.push(newCourse);
        } else {
            console.warn(` lo siento ${this.name}, solo puedes tomar cursos abiertos`)
        }
    }
};
class BasicStudent extends Student3{
    constructor(props) {
        super(props);
    }
    approvedCourse(newCourse){
        if(newCourse.lang !== "english"){
            this.approvedCourses.push(newCourse);
        } else {
            console.warn(`lo siento ${this.name}, solo puedes tomar cursos en ingles`)
        }
    }
};
class ExpertStudent extends Student3{
    constructor(props) {
        super(props);
    }

    approveCouse(newCourse){
            this.approveCouse.push(newCourse);
    }

};


class Classes{
    constructor({
        id,
        name,
    }){
        this.id = id;
        this.name = name;
    }
}

const clase1Html = new Classes({
    id:1,
    name:"empezando con HTML",
})


class Courses{
    constructor({
        name,
        classes =[],
        isFree = false,
        lang = "spanish",
    }){
        this._name=name;// el guin bajo es para que no se lllame desde afuera a al metodo con _
        this.classes = classes;
        this.isFree = isFree;
        this.lang = lang;
    }

    get name(){
        return this._name;
    }
    set name(nuevoNombresito){
        if(nuevoNombresito === 'Curso Malito de programacion basica'){
            console.error("wey... no");
        }else {
            this._name = nuevoNombresito;
        }
    }
}


const programacionBasica = new Courses({
    name: "Curso basico de programacion basica",
    classes: clase1Html,
    isFree:true,
})
const cursoDefinitivoHtml = new Courses({
    name: "Curso Definitivo de HTML y CSS",
    lang:"english",
})

// tipos de polimorfrismos en js sobrecarga parametrico e inclusion
class LearningPath {
    constructor({
        name,
        courses =[],
    }) {
        this.name = name;
        this.courses = courses;
    }

    addCourse(nombreCurso) {
        // this.courses.push(nombreCurso);
    }

    deleteCourse(nombreCurso) {
        indexCourse = this.courses.indexOf(nombreCurso);
        this.courses.pop(indexCourse);
    }
}

const escuelaWeb = new LearningPath({
    name: "Escuela de Desarrollo Web",
    courses: [
        programacionBasica,
        "Curso Definitivo de HTML y CSS",
        "Curso Practico de HTML y CSS",
        "Curso de Responsive Design"
    ]
});

const escuelaDataScience = new LearningPath({
    name: "Escueala de Data Science",
    courses: [
        programacionBasica,
        "Curso de Análisis de Negocios para Ciencia de Datos",
        "Curso de Tableau",
        "Curso de Principios de Visualización de Datos para Business Intelligence"
    ]
});

const escuelaVgs = new LearningPath({
    name: "Escuela de Videojuegos",
    courses: [
        programacionBasica,
        "Curso de Creación de Videjuegos",
        "Curso de Diseño de Videojuegos",
        "Curso Profesional de Diseño de Videojuegos",
    ]
});
const juan2 = new BasicStudent({
    name:"juandc",
    username:"juandc",
    email:"juandc@gmail.com",
    twitter:"fjuandc",
    escuelaVgs,
    escuelaWeb,
});
const miguelito2 = new FreeStudent({
    name:"miguelito",
    username:"miguelito",
    email:"miguelito@gmail.com",
    twitter:"miguelito",
    facebook:"miguelito",
    escuelaDataScience,
    escuelaWeb,
});
const freddy = new TeacherStudent({
    name:"Fredy Vega",
    username:"freddier",
    email:"f.v@gmail.com",
    twitter:"freddier",
    facebook:"freddier",
    escuelaDataScience,
    escuelaWeb,
});




// EJERCICIO PLATZI
class Banda {
    constructor({
      nombre,
      generos = [],
    }) {
      this.nombre = nombre;
      this.generos = generos;
      this.integrantes = [];
    }
    agregarIntegrante(integranteNuevo) {
        if(this.integrantes.find(i => i.instrumento === "Bateria")){
            console.log( "No se ejecuta")
        }else{ this.integrantes.push(integranteNuevo)}
        
  
    }
  }
  
  //Crear clase Integrante
  class Integrante {
    constructor({
      nombre,
      instrumento,
    }) {
      this.nombre = nombre;
      this.instrumento = instrumento;
   }
  
  }
  const data = {
    nombre: 'Los Jacks',
    generos: ['rock', 'pop', 'post-punk'],
    integrantes: [],
  };
  const banda = new Banda(data);
  banda.agregarIntegrante(
    ({ nombre: 'Erik', instrumento: 'Guitarra' })
  );
  banda.agregarIntegrante(
    ({ nombre: 'Paul', instrumento: 'Bateria' })
  );
 
  banda.agregarIntegrante(
({ nombre: 'raro', instrumento: 'Bateria' })
  );



  // OBJECT.KEYS()
//   const Objeto = {
//     nombre: 'Juan',
//     email:"luis.esponeta@gmail.com",
//     edad:30,
// };
// Object.keys(Objeto);
// ["nombre", "email", "edad"]


//OBJECT.VALUES()
// const objetito = {
//     name: "Juanito",
//     email: "juanito@frijolitos.io",
//     age: 18,
//   }
//   Object.values(objetito);
// [ 'Juanito', 'juanito@frijolitos.io', 18 ]




//Object.getOwnPropertyNames()
// const objeto = {
//     name: "Juan",
//     email:"Shimeil@gmail.com",
//     age:30,
// };
// Object.getOwnPropertyNames(objeto);
// ["name", "email", "age"]


//Object.entries()
// const objeto = {
//     name: "Juan",
//     email:"Shimeil@gmail.com",
//     age:30
// };
// Object.entries(objeto);
// // [
//     0: ["name", "Juan"*],1: ["email","Shimeil@gmail.com"],
//     2: ["age",30]
    // ]

    //Object.getOwnPropertyDescriptors()
/*
name: {
    value: "Juan",
    writable: true,
    enumerable: true,
    configurable: true
}
*/
// Nos devuelve otros atributos "writable, enumerable, configurable". Esta es la forma que tiene javascript por dentro para limitar el acceso o la modificación de nuestros atributos u objetos.

