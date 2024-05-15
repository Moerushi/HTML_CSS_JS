// Необязательная задача
// Управление животными в зоопарке
// Вы разрабатываете систему управления животными в зоопарке. Вам нужно создать класс ZooAnimal, который будет иметь следующие характеристики:
// Приватные поля:
// * #name: имя животного (строка).
// * #age: возраст животного (число).
// * #gender: пол животного (строка).
// Публичные методы:
// * constructor(name, age, gender): конструктор класса, который инициализирует поля #name, #age и #gender.
// * changeName(newName): изменяет имя животного на новое.
// * changeAge(newAge): изменяет возраст животного на новый.
// Статическое поле:
// * MAX_AGE: максимально допустимый возраст для всех создаваемых объектов (число).
// Ваша задача: реализовать класс ZooAnimal с указанными характеристиками. Убедитесь, что вы используете приватные поля и статическое поле в соответствии с описанием.

class ZooAnimal {
    #name;
    #age;
    #gender;
    static MAX_AGE = 25;
    constructor(name, age, gender) {
        this.#name = name;
        this.#age = age;
        this.#gender = gender;
    }

    set name(newName){
        this.#name = newName;
    }

    set age(newAge){
        this.#age = newAge;
    }

    get info(){
        return `${this.#name} - ${this.#age} - ${this.#gender}`
    }
}

const monkey = new ZooAnimal('Busya', 5, 'female');
console.log(monkey.info);
monkey.name = 'Lana';
console.log(monkey.info);
monkey.age = 7;
console.log(monkey.info);