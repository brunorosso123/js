function* gen() {
    yield 1;
    yield 2;
    yield 3;
}

const g = gen();

console.log(g.next().value);
console.log(g.next().value);
console.log(g.next().value);


function* iterator(array) {
    for (const value of array) {
        yield value
    };
};

let it = iterator(['oscar','gimena','vanessa']);


console.log(it.next());
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);