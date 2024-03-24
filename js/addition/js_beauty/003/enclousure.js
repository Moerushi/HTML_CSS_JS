// замыкания
function multiplier(factor) {
  return num => num * factor;
}

let twice = multiplier(2); // возвращает функцию num => num * factor, где factor = 2, а num берется из нового вызова функции twice
console.log(twice(5));
let threeTimes = multiplier(3);
console.log(threeTimes(5));