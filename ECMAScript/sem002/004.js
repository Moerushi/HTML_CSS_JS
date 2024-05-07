// Создайте класс Person, который имеет свойства name и age, а также метод introduce(), который выводит сообщение с представлением имени и возраста персоны.
// const person = new Person("John", 25);
// person.introduce(); // Вывод: My name is John and I'm 25 years old.

class NewPerson {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  introduce() {
    return `My name is ${this.name} and I'm ${this.age}.`
  }
}

const john = new NewPerson('John', 25);
console.log(john.introduce());

// старый вариант конструктора, но его можно преобразовать в класс
function personTwo (name,age){
  this.name = name;
  this.age = age;
  this.greeting = () => {
    console.log(`Hello! My name's ${this.name} and I'm ${this.age} years old.`);
  };
}

const ivan = new personTwo('Ivan', 18);
ivan.greeting();