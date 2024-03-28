"use strict";

/*
Создайте функцию которая принимает число, возводит переданное число в куб и 
возвращает полученное значение. 
Необходимо продемонстрировать вызов данной функции, с выводом результата, 
который получаем от функции, в консоль.
*/

// Здесь пишем решение, данный комментарий необходимо стереть.

// 1
function squareTransformFirstFunction(num) {
  return Math.pow(num, 3);
}
const firstUserNumber = 2;
console.log(`Квадрат ${firstUserNumber} числа равен ${squareTransformFirstFunction(firstUserNumber)}.`);

// 2
const squareTransformSecondFunction = (num) => Math.pow(num, 3);
const secondUserNumber = 4;
console.log(`Квадрат ${secondUserNumber} числа равен ${squareTransformSecondFunction(secondUserNumber)}.`);

// 3
const squareTransformThirdFunction = function (num) {
  return Math.pow(num, 3);
}
const thirdUserNumber = 8;
console.log(`Квадрат ${thirdUserNumber} числа равен ${squareTransformThirdFunction(thirdUserNumber)}.`);
