const chapterArray = [2, 4, 5, 7, 19, 5];
const chapterArrayTwo = [1, 10, 15, 7, 119, 55, 'you'];
console.log(chapterArray.length); // 6
console.log(chapterArray[2]); // 5
console.log(chapterArray.includes(4)); // true
chapterArray.push(11);
console.log(chapterArray.pop()); // 11
console.log(chapterArray.shift()); // 2 и удаляет из массива
chapterArray.unshift(34); // дбавляет в начало массива
console.log(chapterArray.includes(34)); // true
console.log(chapterArray.indexOf(5)); // 2
console.log(chapterArray.lastIndexOf(5)); // 5
console.log(chapterArray.slice(0, 3)); // [34, 4, 5]
console.log(chapterArray.concat(chapterArrayTwo)); // соединяет массивы
console.log(chapterArray.concat(123)); // добавлет значение в конец массива, если значение не массив
console.log(chapterArray.reverse()); // разворот массива в обратную сторону
console.log(chapterArray);
console.log(Math.random()); // выводит случайное число от 0 до 1
console.log(Math.ceil(Math.random() * 10)); // округяет число в большую сторону
console.log(Math.abs(-Math.random() * 10)); // убирает отрицательный знак
console.log(Math.round(Math.random() * 10)); // округяет число в меньшую сторону
console.log(Math.floor(Math.random() * 10)); // откругялет число в меньшую сторону
console.log(Math.trunc(Math.random() * 10)); // убирает знак после запятой
console.log(Math.sqrt(Math.min(...chapterArray))); // находит квадратный корень
console.log(Math.sin(Math.min(...chapterArray))); // находит sin
console.log(Math.PI); // выводит число ПИ
console.log(Math.min(...chapterArray)); // находит наименьшее значение из списка
console.log(Math.max(...chapterArray)); // находит наибольшее значение из списка, НО нужно поставть ... перед массивом, т.е. ... позволяет разворачивать массив, пример ниже
console.log(1, 3, ...chapterArrayTwo, 4, 5);

// for (let i = 0; i < chapterArray.length; i++) {
//   console.log(`Индекс ${i} из обычного цикла for.`);
// }

// for (const item of chapterArray) {
//   console.log(`Индекс ${chapterArray.indexOf(item)} из цикла for of.`);
// }

const someString = '    на горе сидит рак';
console.log(someString);
console.log(someString.indexOf('го')); // находит индекс первого элемента
console.log(someString.trim()); // удаляет лишние пробелы в начале строки
console.log(String(6).trim().padStart(3, '0').padEnd(3, '0')); // заполняет строку символами вначале
console.log(String(6).trim().padEnd(3, '0')); // заполняет строку символами в конце
console.log(someString.trim().split(' ')); // делит строку на части, создавая массив
console.log(someString.trim().split(' ').join('-')); // соединяет строку
console.log(someString.trim().repeat(4)); // повторяет строку несколькоо раз

console.log(sum(range(1,10))); // создает массив с диапазоном элементов, первый параметр откуда генерировать, а второй - докуда. Третий необязательный параметр функции задает шаг // и потом засумирует их

// Деструктизация массивов или объектов
// Если вы знаете, что значение, которое назначается привязке, является массивом, то вы можете использовать квадратные скобки, чтобы «заглянуть внутрь~ этого значения, назначив привязки его содержимому.

const someArray = [10, 20, 30];
const findArray = ([first, second, third]) => first + second + third;
console.log(findArray(someArray));

let { userName } = { userName: "Фараджи", age: 23 };
console.log(userName);

const obj = { 'name': 'Nick', 'age': 12, 'achievments': [12, 14, 16, 18] }

console.log(JSON.stringify(obj)); // переводит JavaScript в формат JSON
console.log(JSON.parse(JSON.stringify(obj)).name); // переводит JSON в формат JavaScript