class Animal {
    constructor (name) {
        this.name = name;
    }
}

class Dog extends Animal {
    bark() {
        console.log('Woof!');
    }
}

const animal = new Animal('Animal');
const dog = new Dog('Dog');

console.log(animal instanceof Animal); // true
console.log(dog instanceof Animal); // true
console.log(dog instanceof Dog); // true

console.log(animal instanceof Dog); // false
console.log(dog instanceof Cat); // error
