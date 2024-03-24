"use strict";

/*
Используя Math.random() необходимо сгенерировать массив, содержащий 5 цифр в 
диапазоне [0, 9].
После создания массива необходимо вывести в консоль следующие значения:
1. Сумму элементов массива
2. Минимальное значение в массиве
3. Новый массив, содержащий индексы сгенерированного выше массива, в которых 
значение равно 3.
Пример: Если у нас сгенерировался массив [2, 3, 5, 7, 3], то мы должны вывести 
в консоль массив [1, 4]. Такой массив получился потому что в сгенерированном
массиве тройки лежат под индексами 1 и 4. Если троек в сгенерированном массиве
не окажется, значит нужно будет вывести пустой массив.
*/

// Здесь пишем решение, данный комментарий необходимо стереть.

const findSum = (array) => {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
}

const findMin = (array) => {
  let min = array[0];
  for (let i = 1; i < array.length; i++) {
    if (array[i] < min) {
      min = array[i];
    }
  }
  return min;
}

const findNumberIndex = (array, num) => {
  const result = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] === num) {
      result.push(i);
    }
  }
  return result;
}

const myArray = [];
const myArrayLength = 5;
const userNumber = 3;

for (let i = 0; i < myArrayLength; i++) {
  myArray.push(Math.trunc(Math.random() * 10));
}

console.log(`Сумма элементов массива [${myArray.join(', ')}] равна ${findSum(myArray)}.`);
console.log(`Минимальное значение в массиве [${myArray.join(', ')}] равно ${findMin(myArray)}.`);
console.log(`Число '${userNumber}' в массиве [${myArray.join(', ')}] содержится под индексом(ами) [${findNumberIndex(myArray, userNumber)}].`);