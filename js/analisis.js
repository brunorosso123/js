console.log(salarios)


function encontrarPersona(buscarPersona){
return salarios.find(el => el.name.toLowerCase() == buscarPersona.toLowerCase());
    // esto es lo mismo que ...
    //   const el = salarios.find((el) =>{
    //     return el.name.toLowerCase() == buscarPersona
    // });
    // return el;
};
function medianaPorPersona(nombrePersona){
    const trabajos = encontrarPersona(nombrePersona).trabajos;
    let salarios = trabajos.map(function(elemento){
        return elemento.salario
    })
    return PlatziMath.mediana(salarios)
};

function conseguirSalarioViejo(nombrePersona,num){
    const trabajos = encontrarPersona(nombrePersona).trabajos;
    let salarios = trabajos.map(function(elemento){
        return elemento.salario
    });
    console.log(salarios)
    let salarioViejo = salarios.length-1;
    let primerSalario = salarios.length[0];
    let aumentoEnPorcentaje = ((num - salarios[salarioViejo])/salarios[salarioViejo])*100;
    let devolucion = `el porcernatje de aumento para ${nombrePersona} es de:` + aumentoEnPorcentaje +"%";
    return devolucion
};

function aumentoPorcentualPorAnio(nombrePersona){
    const trabajos = encontrarPersona(nombrePersona).trabajos;
    const recopilacionDePorcentajes = []
    for (let index = 1; index < trabajos.length; index++) {
        const salarioActual = trabajos[index].salario;
        const salarioViejo = trabajos[index -1].salario;
        const creciemiento = (salarioActual-salarioViejo)/salarioViejo;
        
        recopilacionDePorcentajes.push(creciemiento);
    }
    const medianaCrecimiento = PlatziMath.mediana(recopilacionDePorcentajes);
    const ultimoSalario = trabajos[trabajos.length-1].salario;
    let aumentoDeSueldo = ultimoSalario * medianaCrecimiento;
    const nuevoSalario = ultimoSalario + aumentoDeSueldo
    console.log({nuevoSalario})
};
// function salariosPorIndustria(salarios){
//     const salarioFreelance = [];
//     for (let i = 0; i < salarios.length; i++) {
//         const object = salarios[i].trabajos;
//         console.log(object)
//        for (const iterator of object.trabajos) {
//         console.log(iterator)
//        }
       
       
       
//     }

//         //let probando = Object.entries(element)
      
//         // const subElement = salarios[i].
//         // if(element.empresa == 'freelance'){
//             // salarioFreelance.push(element.salario)
//         // }
//         // console.log(salarioFreelance)
//    }
//  Analisis empresarial
const empresas = {};

for (const persona of salarios) {
    for (const trabajo of persona.trabajos) {
        if(!empresas[trabajo.empresa]){
            empresas[trabajo.empresa] = {};
        }
        if(!empresas[trabajo.empresa][trabajo.year]){
            empresas[trabajo.empresa][trabajo.year] = [];
        }

        empresas[trabajo.empresa][trabajo.year].push(trabajo.salario)
        
    }
}
function medianaEmpresaYear(nombre,year) {
    if(!empresas[nombre]){
        console.warn('la empresa no existe');
        return;
    }else if(!empresas[nombre][year]){
        console.warn('el anio no existe no existe');
    } else {
        return PlatziMath.mediana(empresas[nombre][year]);
    }

}
// hacer con minimo y maximo tmb 
function aumentoPorEmpresas(nombre){
    if(!empresas[nombre]){
        console.warn('la empresa no existe');
        return;
    }  
    const trabajos = Object.keys(empresas[nombre])
    const listaMedianaYears = trabajos.map((year) => {
        return medianaEmpresaYear(nombre,year)
    });
        console.log({listaMedianaYears})


        const recopilacionDePorcentajes = []
        for (let index = 1; index < listaMedianaYears.length; index++) {
            const salarioActual = listaMedianaYears[index];
            const salarioViejo = listaMedianaYears[index -1];
            const creciemiento = (salarioActual-salarioViejo)/salarioViejo;
            
            recopilacionDePorcentajes.push(creciemiento);
        }
        const medianaCrecimiento = PlatziMath.mediana(recopilacionDePorcentajes);

        const ultimaMedianaSalario = listaMedianaYears[listaMedianaYears.length-1];
        let aumento = ultimaMedianaSalario * medianaCrecimiento;
        const nuevoMedianaSalario = ultimaMedianaSalario + aumento
        return nuevoMedianaSalario
    
    }

    // analisis general 

    function medianaGeneral (){
        const nombres = salarios.map(persona => persona.name);
        
        const medianaPorCadaPersonas = nombres.map(nombre => medianaPorPersona(nombre));
        console.log({nombres, medianaPorCadaPersonas});

    const mediana = PlatziMath.mediana(medianaPorCadaPersonas)
    return mediana

    }

    function medianaTop10 (){
    const nombres = salarios.map(persona => medianaPorPersona(persona.name));
    console.log(nombres)
    const medianasOrdenadas = nombres.sort((a,b) => b-a);
    console.log(medianasOrdenadas)
    const limites = (medianasOrdenadas.length)/10;
    console.log(limites);
    const top10 = medianasOrdenadas.slice(0,limites);
    const medianaDel10 = PlatziMath.mediana(top10);
    return medianaDel10
    }



    //para hacer mas tarde
    // un ejemplo https://pipemalz.github.io/12_practico_javascript_math/


