let count = 0;
while (count < 4) {
  console.log(`${count} строка цикла while`);
  count++;
}

count = 0;
do {
  console.log(`${count} строка цикла do-while`);
  count++;
} while (count < 4);

let testArray = [2, 9, 3, 8, 4, 7, 0, 6];
console.log(`Изначальный массив - ${testArray}`);
testArray.push(15);
console.log(`Массив после применения метода testArray.push(15); - ${testArray}`);
testArray.pop();
console.log(`Массив после применения метода testArray.pop(); - ${testArray}`);
console.log(`Применение метода shift к массиву выводит первый элемент массива - ${testArray.shift()}`);
console.log(`Применение метода slice(2,4) к массиву выводит заданную вырезку - ${testArray.slice(2,4)}`);
console.log(`Применение метода indexOf(4) к массиву выводит индекс элемента - ${testArray.indexOf(7)}`);
console.log(`Применение метода indexOf(10) к массиву выводит '-1', если элемента нет - ${testArray.indexOf(10)}`);

let stringArray = [];
const someString = 'Далеко-далеко за словесными горами...'.toUpperCase();
stringArray = someString.split('');
console.log(`Применение метода split('') к массиву разделяет текст на части - ${stringArray}`);
console.log(`Применение метода indexOf('д') к массиву выводит индекс первого встретившегося элемента - ${stringArray.indexOf('а')}`);
console.log(`Применение метода join('') к массиву соединяет в одну строку - ${stringArray.slice(0,6).join('')}`);
console.log(stringArray);