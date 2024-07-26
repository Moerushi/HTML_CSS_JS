const initialArray = [[1, 2, 3], [9, 8, 7], [6, 4, 5]];

let finalArray = [];
for (let innerArray of initialArray) {
  finalArray = finalArray.concat(innerArray);
}

console.log('Первоначальный массив');
console.log(initialArray);
console.log('Результат через одну строку');
console.log(initialArray.reduce((sum, num) => sum.concat(num), []));
console.log('Результат через for');
console.log(finalArray);
