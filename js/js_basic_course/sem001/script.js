/*
Задание 1
 */

console.log("Текст из script.js");
let num = 123;
console.log(num);
let a = 5;
a = 7;
console.log(a);

let b = 1 + 2 + 3;
console.log(b);

// Комментарий 2

// const myAge = +prompt("Введите ваш возраст: ");
const myAge = 12;
const year = 2024;
const summ = myAge + year;
console.log(`сумма равна ${summ}`);
const diff = year - myAge;
console.log(`разность равна ${diff}`);
const mult = myAge * year;
console.log(`произведение равно ${mult}`);
const div = year / myAge;
console.log(`частное равно ${div}`);
console.log(myAge, year);

// Комментарий 3

const str = '12h3.2';
console.log(str);
console.log(-str);
console.log(Number(str));
console.log(Number.parseInt(str));
console.log(Number.parseFloat(str));

// Комментарий 4

console.log(summ + diff + mult + div);

// Комментарий 5

const c = 0.1;
const d = 0.2;
console.log(Math.trunc((c + d) * 10) / 10); // 0.30000000000000004, но округляем до 0.3 математически

// Комментарий 6

let e = 123;
console.log(e);
console.log(-e);

// Комментарий 7

const userName = 'Nick';
const userSurname = 'Ivanov';
console.log(`${userName} ${userSurname}`);

const firstPart = 'Java';
const secondPart = 'Script';
console.log(`${firstPart+secondPart}`);

const hello = 'Hello';
const world = 'World!';
console.log(`${hello} ${world}`.toUpperCase());
console.log(`${hello} ${world}`.toLowerCase());
console.log(`${hello} ${world}`.toLocaleUpperCase());
console.log(`${hello} ${world}`.toLocaleLowerCase());