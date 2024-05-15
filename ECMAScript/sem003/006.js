// Создать класс "Товар" с приватными полями "название", "цена" и "количество". Класс должен иметь публичные методы "изменить цену", "изменить количество" и "получить стоимость", которые будут изменять соответствующие поля объекта и возвращать стоимость товара соответственно. Также класс должен иметь статическое поле "максимальное количество", которое будет задавать максимально допустимое количество товара для всех создаваемых объектов.

class Product {
    #name;
    #price;
    #quantity;
    static #maxQty = 10;
    constructor(name, price, quantity) {
        this.#name = name;
        this.#price = price;
        this.#quantity = quantity;
        if (quantity > Product.#maxQty) {
            throw new Error(`Допустимое кол-во превышено.`);
        }
    }

    get name(){
        return this.#name;
    }

    set name(newName) {
        this.#name = newName;
    }

    get price(){
        return this.#price;
    }

    get quantity(){
        return this.#quantity;
    }
}

const phone = new Product('iPhone 15',1500,1);
console.log(phone.name);
phone.name = 'iPhone 15 Pro';
console.log(phone.name);