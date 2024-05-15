// Напишите конструктор объекта Person, который принимает два аргумента: name (строка) и age (число). Конструктор должен создавать объект с указанными свойствами name и age и методом introduce(), который выводит в консоль строку вида "Меня зовут [name] и мне [age] лет.".

class PersonTwo {
 constructor(name,age) {
    this.name = name;
    this.age = age;
 }
 introduce() {
    console.log(`My name's ${this.name}. I'm ${this.age} years old.`);
 }
}

const personTwo = new PersonTwo("John", 25);
personTwo.introduce(); // Вывод: Меня зовут John и мне 25 лет.