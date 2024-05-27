// todos los elementos tienen que cumplir la condicion y devuelve un boolean, no como SOME que si habia un valor ya retornaba true


// const numeros = [1,44,55,43,54,67];

// let sta = numeros.every(item => item <=60)
// console.log(sta);

const team = [
    {
      name: "Nicolas",
      age: 12,
    },
    {
      name: "Andrea",
      age: 8,
    },
    {
      name: "Zulema",
      age: 2,
    },
    {
      name: "Santiago",
      age: 18,
    },
  ];

  let admitir = team.every(jugador =>jugador.age <= 19);
  console.log(admitir);

  let recorrer = team.map(item => item.age );
  let rta = recorrer.every( item => item <= 15);
  (rta === false) ?console.log('Equipo no admitido, hay mayores de 15') :console.log("Eqipo admitido!"); 