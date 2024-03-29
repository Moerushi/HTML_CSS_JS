// Написать функцию, которая принимает, имя, фамилия и возраст. Функция должна
// вывести в консоль строку:
// "Привет, `имя` `фамилия`. Вы уже большой, вам `возраст`."
 
// function userInfo(name, surname, age) {
//     console.log(`Привет, ${name} ${surname}. Вы уже большой, вам ${age}.`);
// }
// userInfo('Иван', 'Иванович', '18');
 
// Создайте функцию, которая принимает число, а возвращает квадрат переданного
// ей числа.
 
// function makeSquare(x) {
//     return x ** 2;
// }
// console.log(makeSquare(4));
 
// Создайте функцию, которая принимает число.
// Функция должна вывести в консоль '+++', если число положительное, либо '---',
// если число было отрицательное. В случае, если было передано не число, либо ноль,
// функция ничего не должна выводить.
 
// function numberPositive(number) {
//   if (typeof number !== "number") {
//     return;
//   }
 
//   if (number > 0) {
//     console.log("+++");
//   } else if (number < 0) {
//     console.log("---");
//   }
// }
// numberPositive("6");
 
// Создайте функцию, которая параметрами принимает 3 числа и выводит в
// консоль сумму этих чисел.
// Создайте три переменные, со случайными значениями и продемонстрируйте работу
// данной функции.
 
// const sumNumbers = (a, b, c) => console.log(a + b + c);
// const a = Math.trunc(Math.random() * 10);
// const b = Math.trunc(Math.random() * 10);
// const c = Math.trunc(Math.random() * 10);
 
// sumNumbers(a, b, c);
 
// 3. Дан код:
 
// ```
// func(2);
// func(3);
// func();
 
// function func(num = 5) {
//   console.log(num * num);
// }
// ```
 
// Расскажите, каким будет результат каждого из вызовов функции.
 
// Создайте функцию, которая принимает число, а возвращает квадратный корень
// переданного числа.
// С помощью созданной функции найдите сумму корней чисел 3 и 4 и выведите данную
// сумму в консоль.
// const root = (x) => {
//     return Math.sqrt(x);
// };
// console.log(root(3) + root(4));
 
// 2. Создайте функцию, которая находит минимальное число из 2х переданных
// аргументов функции и вернет найденное значение.
// const findMin = (x, y) => Math.min(x, y);
// console.log(findMin(2,54));
 
// 1. Создайте функцию, которая принимает параметром число от 1 до 7, а возвращает
// день недели на русском языке.
 
// const number = Number(prompt('Введите число от 1 до 7'));
// function dayWeek(num) {
//     switch (num){
//         case 1: return 'Понедельник';
//         case 2: return 'Вторник';
//         case 3: return 'Среда';
//         default: return 'Не верное число';
//     }
// }
// console.log(dayWeek(number));
// const number = Number(prompt("Введите число от 1 до 7"));
// function dayWeek(num) {
//   switch (num) {
//     case 1:
//       console.log("Понедельник");
//       break;
//     case 2:
//       console.log("Вторник");
//       break;
//     case 3:
//       console.log("Среда");
//       break;
//     default:
//       console.log("Не верное число");
//   }
// }
// dayWeek(number);
 
// 2. Создайте функцию, которой мы передаем имя и она возвращает приветствие в
// зависимости от времени суток (утро, день, вечер, ночь), например:
// "Добрый день, Иван." или "Доброй ночи, Иван.".
 
// function sayHello(name) {
//   const time = new Date();
//   const hour = time.getHours();
//   if (hour < 6) {
//     return `Доброй ночи, ${name}.`;
//   }
//   if (hour < 12) {
//     return `Доброе утро, ${name}.`;
//   }
//   if (hour < 18) {
//     return `Добрый день, ${name}.`;
//   } 
//   return `Добрый вечер, ${name}.`;
// }
// console.log(sayHello("Иван"));
// const a = 500;
// console.log(a * 0.75);
/**
 * ф-я возвращает приветствие
//  * @param {string} name - имя пользователя
//  * @param {number} age  - djphfcn gjkmpjdfntkz
//  * @returns {string} - строка с приветствием
//  */
// function seyHello(name, age) {
//   return `Привет, ${name}, вам ${age}`;
// }