const PlatziMath = {};


PlatziMath.promedio = function promedio (arr){
    let el =0;
    arr.forEach(element => {
        el +=element
    });
    let prom = el/arr.length
    return prom;
};

PlatziMath.mediana = function mediana(arre){
    let arre2 = arre.sort((a,b) => a-b);
    // console.log(arre2)
    if(arre2.length %2 === 0){
       let indexMitadArrePar1 = Math.floor(arre2.length /2);
       let indexMitadArrePar2 = Math.floor(arre2.length /2) -1;
    //    console.log(arre2[indexMitadArrePar1])
    //    console.log(arre2[indexMitadArrePar2])
       let medianaPar = (arre2[indexMitadArrePar1] + arre2[indexMitadArrePar2]) /2
       return medianaPar;

    }
    else if(arre2.length %2 === 1){
        let idexMitadArreImpar = Math.floor(arre2.length /2);
        console.log(arre2[idexMitadArreImpar])
        let medianaImpar =arre2[idexMitadArreImpar];
        return medianaImpar;
    }
    else return 'nose';
};
PlatziMath.modal = function modal(lista) {
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
 
};
