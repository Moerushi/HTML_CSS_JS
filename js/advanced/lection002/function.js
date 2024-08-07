function sayHello() {
    console.log('Hello!');
}

console.log(sayHello.name); // выводит имя функции
console.log(window.name); // имя окна браузера

const obj = {};
console.log(obj.name);

class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
}

const rect = new Rectangle(10, 5);
console.log(rect.constructor.name);