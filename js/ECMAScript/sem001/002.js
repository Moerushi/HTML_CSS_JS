// Текст задания
// 1. Напишите функцию getEvenNumbers, которая принимает массив
// чисел в качестве аргумента и возвращает новый массив,
// содержащий только четные числа.
// 2. Задача: Напишите функцию calculateAverage, которая принимает
// массив чисел в качестве аргумента и возвращает среднее значение
// этих чисел.
// 3. Напишите функцию capitalizeFirstLetter, которая принимает строку в
// качестве аргумента и возвращает новую строку, в которой первая буква каждого слова является заглавной.

function getEvenNumbers(arr) {
  return arr.filter((elem) => elem % 2 === 0);
};

console.log(getEvenNumbers([1, 2, 3, 4, 5, 6]));

function calculateAverage(arr) {
  return arr.reduce((acc, elem) => acc + elem) / arr.length;
};

console.log(calculateAverage([1, 2, 3, 4, 5, 6]));

function capitalizeFirstLetter(line) {
  return line.replace(/(^|\s)\S/g, (char) => char.toUpperCase());
}

const myLine = 'качестве аргумента и возвращает новую строку, в которой первая буква каждого слова является заглавной';
console.log(capitalizeFirstLetter(myLine));