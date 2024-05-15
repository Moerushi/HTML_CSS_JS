// Создать класс "Пользователь" с приватными полями "имя", "возраст" и "электронная почта". Класс должен иметь публичные методы "изменить имя", "изменить возраст" и "изменить электронную почту", которые будут изменять соответствующие поля объекта. Также класс должен иметь статическое поле "максимальный возраст", которое будет задавать максимально допустимый возраст для всех создаваемых объектов.

class User {
    #name; // приватные поля, недоступные для других частей программы, обозначаются через #
    #age;
    #email;
    static #maxAge = 99;
    constructor(name, age, email) {
        this.#age = age;
        this.#name = name;
        this.#email = email;
        if (age > User.#maxAge) {
            throw new Error(`Возраст слишком велик`);
        }
    }

    setName(newName) {
        this.#name = newName;
    }
    setAge(newAge) {
        if (newAge > User.#maxAge) {
            throw new Error(`Возраст слишком велик`);
        }
        this.#age = newAge;
    }
    setEmail(newEmail) {
        this.#email = newEmail;
    }

    getInfo() {
        console.log(`${this.#name} - ${this.#age} - ${this.#email}`);
    }
}

const sidor = new User('Сидор', 25, 'sidor25@gmail.com');
sidor.getInfo();