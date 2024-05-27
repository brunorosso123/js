const pets = [ "cat", "dog", "bat", "duck", "mouse"];


let includeInArray = false;
for (let index = 0; index < pets.length; index++) {
    const element = pets[index];
    if (element === 'dog'){
        includeInArray = true;
        break;
    }
}
console.log('for', includeInArray);

const rta = pets.includes('dog');
console.log('include', rta);






function filterByTerm(array, term) {
    return array.filter(item => {
      return item.includes(term)
    })
  }

 console.log(filterByTerm(["ana", "santi", "nico", "anastasia"], 'ana')); 