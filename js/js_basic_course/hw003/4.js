"use strict";

/*
Необходимо реализовать четыре функции, каждая функция должна принимать по два
числа и выполнять одну из операций (каждая функция выполняет одну из них):
1. Сложение
2. Разность
3. Умножение
4. Деление
Необходимо сделать так, чтобы функция вернула число, например выражение
console.log(sum(2, 6)); должно вывести число 8 в консоль (sum - функция
сложения в данном примере, ваши названия функций могут отличаться).
Округлять значения, которые возвращают функции не нужно, однако, обратите
внимание на разность, функция должна вычесть из большего числа меньшее, либо
вернуть 0, если числа равны.
Функциям всегда передаются корректные числа, проверки на NaN, Infinity делать
не нужно.
Демонстрировать работы функций не обязательно.
*/

// Здесь пишем решение, данный комментарий необходимо стереть.

const sum = (firstNum, secondNum) => firstNum + secondNum;

function diff (firstNum, secondNum) {
  let result = 0;
  if (firstNum >= secondNum) {
    result = firstNum - secondNum;
  } else {
    result = secondNum - firstNum;
  }
  return result;
}

const multy = (firstNum, secondNum) => firstNum * secondNum;

const div = (firstNum, secondNum) => firstNum / secondNum;

const firstNumber = 6;
const secondNumber = 6;
console.log(`Сумма чисел ${firstNumber} и ${secondNumber} равна ${sum(firstNumber, secondNumber)}.`);
console.log(`Разность чисел ${firstNumber} и ${secondNumber} равна ${diff(firstNumber, secondNumber)}.`);
console.log(`Результат деления числа ${firstNumber} на ${secondNumber} равен ${div(firstNumber, secondNumber)}.`);
console.log(`Произведение чисел ${firstNumber} и ${secondNumber} равно ${multy(firstNumber, secondNumber)}.`);