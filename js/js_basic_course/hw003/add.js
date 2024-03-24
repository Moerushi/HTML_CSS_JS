// Реализовать функцию round5, которой передается целое число, функция должна 
// возвращать ближайшее целое число к тому что было передано, без остатка делящееся 
// на 5.

// Здесь пишем решение, данный комментарий необходимо стереть.

function roundFive(val) {
  let result = 0;
  if (Math.abs(val) % 5 <= 2) {
    result = Math.abs(val) - (Math.abs(val) % 5);
  } else {
    result = Math.trunc((5 - Math.abs(val) % 5) + Math.abs(val));
  }
  if (val < 0 && result !== 0) {
    result = -result;
  }
  return result;
}

console.log(roundFive(0)); // 0
console.log(roundFive(2)); // 0
console.log(roundFive(3)); // 5
console.log(roundFive(11)); // 10
console.log(roundFive(14)); // 15
console.log(roundFive(50)); // 50
console.log(roundFive(-2)); // 0
console.log(roundFive(-3)); // -5
console.log(roundFive(-11)); // -10
console.log(roundFive(-14)); // -15
console.log(roundFive(-50)); // -50