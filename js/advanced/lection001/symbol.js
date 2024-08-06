const symbol = Symbol();

const dogId = Symbol('dog');

const dog1 = Symbol('dog');
const dog2 = Symbol('dog');

console.log(dog1 === dog2); // два разных идентификатора
console.log(dog1);
console.log(dog2);

console.log(dogId.description);

let id = Symbol('dogId');
let buddy = {
    [id]: 'Жучка'
}
console.log(buddy[id]);
buddy[id] = 'Бобик';
console.log(buddy[id]);

//object.assign()

// Symbol.for
let id2 = Symbol.for('id');
console.log(id2);

console.log(Symbol.keyFor(id2));