const product = {
  name: 'Table',
  price: 2000,
  text: 'cool table',
  userRegister: false,
  count: 1,
  countProduct: function () {
    if (this.count > 0) {
      console.log('You may buy one piece of product!');
      this.count--;
    } else {
      console.log('There is no enough product to buy!');
    }
  },
  buyProduct: function () {
    if (this.userRegister) {
      console.log('Product added to cart!');
    } else {
      console.log('Registration required! Use userReg() function!');
    }
  },
  userReg: function () {
    this.userRegister = true;
  }
};

console.log(product);
console.log(product.name);
product.link = 'product/link.html';
console.log(product);
delete (product.text);
console.log(product);
product.link = 'catalog/link.html';
console.log(product);

let productSale = product; // не создается новый объект, создается ссылка и поэтому перезаписывает значение у копируемого элемента
console.log(productSale);
productSale.price = 1500;
console.log(product);
console.log(productSale);

product.buyProduct();
product.userReg();
product.buyProduct();

for (const key in product) { // пробегается по ключам элемента
  console.log(product[key]);
}

// map() работает только с массивом
// Object.keys(объект) - выводит массив ключей
// Object.values(объект)  - выводит массив значений, в приоритете
// можно создавать объекты в объектах
// Object.entries(объект) - выводит пара ключ-значение в виде массива

// функции высшего порядка map - формирует новый массив на основе другого по условию
// filter для фильтрации по правилу, которое я задаю сам
// reduce чаще всего используется для сложения, умножения
// some ищет подходящий нам элемент
// find

const myArray = [1, 2, 3, 10, 15];
console.log(myArray);
const arrayMap = myArray.map(item => item * 2); // не меняет изначальный массив
console.log(arrayMap);
const arrayFilter = myArray.filter(item => item >= 10); // создает массив по условию
console.log(arrayFilter);
const arraySome = myArray.some(item => item >= 10); // для понимания, есть ли такие элементы или нет
console.log(arraySome);
const arrayReduce = myArray.reduce((a, b) => a + b); // суммирует все элементы
console.log(arrayReduce);

// деструктизация - прочитать про это и разобраться получше
const student = {
  firstName: "Ivan",
  lastName: "Petrov",
  age: 21
};

const {firstName: studentFirstName, lastName, age = 20} = student; 
const students = ["Ivanov", "Petrov", "Belkin"];
const [student1, student2, student3] = students;
console.log(student3);