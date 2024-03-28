"use strict";

/*
Необходимо попросить пользователя ввести три числа.
Необходимо создать функцию, в которую мы должны передать эти три числа.
Функция должна определить максимальное, среди переданных ей значение и 
вывести сообщение: "Максимальное значение среди чисел N1, N2, N3 равно N."

Примечание: Условимся, что пользователь всегда вводит корректные значения, 
три числа. Проверять их не нужно.
*/

// Здесь пишем решение, данный комментарий необходимо стереть.
function findMaxNumber(firstNum, secondNum, thirdNum) {
  //  return Math.max(firstNum, secondNum, thirdNum);
  let max = firstNum;
  if (secondNum > max) {
    max = secondNum;
  } else if (thirdNum > max) {
    max = thirdNum;
  }
  return max;
}

const firstNumber = Number(prompt('Введите первое число: '));
const secondNumber = Number(prompt('Введите второе число: '));
const thirdNumber = Number(prompt('Введите третье число: '));
console.log(`Максимальное значение среди чисел ${firstNumber}, ${secondNumber}, ${thirdNumber} равно ${findMaxNumber(firstNumber, secondNumber, thirdNumber)}.`);