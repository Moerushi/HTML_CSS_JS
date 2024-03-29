// Задание 5:
// 1. Пользователь с клавиатуры вводит число. Необходимо создать условный
// оператор, который выведет одну из следующих строк в консоль:
// “Число больше 5”, “Число меньше 5”, либо “Число равно 5”.
const number = Number(prompt("Введите число: "));
if (!Number.isFinite(number)) {
    console.log("error");
} else if (number === 5) {
    console.log("Число равно 5");
} else if (number > 5) {
    console.log("Число больше 5");
} else {
    console.log("Число меньше 5");
}
// 2. Создайте две переменные test1 и test2. Проверьте, равны ли их значения и
// выведите соответствующее сообщение.
const test1 = 10;
const test2 = 10;
// if (test1 === test2) {
//     console.log("равны");
// } else {
//     console.log("не равны");
// }
// test1 === test2 ? console.log("равны") : console.log("не равны");
console.log(test1 === test2 ? "равны" : "не равны");
// 3. Пользовать с клавиатуры вводит 2 числа, необходимо определить, какие из двух
// чисел минимальное и вывести в консоль строку “Минимальное число `число`”.
const firstNumber = Number(prompt("Введите первое число:"));
const secondNumber = Number(prompt("Введите второе число:"));
console.log(
    firstNumber < secondNumber
        ? `Минимальное число ${firstNumber}`
        : `Минимальное число ${secondNumber}`
);
// console.log(
//     `Минимальное число ${
//         firstNumber < secondNumber ? firstNumber : secondNumber
//     }`
// );
// 4. Попросить пользователя ввести число, которое будет больше нуля и меньше 15.
// Если пользователь ввел значение, о котором его попросили, необходимо вывести
// сообщение “Спасибо за число `число`.”, в противном случае, вывести сообщение:
// “А вы, я смотрю, хулиганите! `число` - неверное значение.”
const input = prompt("Введите число >0 и <15 ");
const inputNumber = Number(input);
if (number <= 0 || number >= 15) {
    console.log(`А вы, я смотрю, хулиганите! ${number} - неверное значение.`);
} else {
    console.log(`Спасибо за число ${number}.`);
}
// if (inputNumber > 0 && inputNumber < 15) {
//     console.log(`Спасибо за число ${inputNumber}.`);
// } else {
//     console.log(`А вы, я смотрю, хулиганите! ${input} - неверное значение.`);
// }