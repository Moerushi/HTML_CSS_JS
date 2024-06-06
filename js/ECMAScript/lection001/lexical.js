// Вариант 1

// const houses = [];

// let i = 0;
// while (i < 10) {
//   let house = function () {
//     console.log(i);
//   }
//   houses.push(house);
//   i++;
// };

// houses[0](); // 10
// houses[7](); // 10

// let house = function () {
//   console.log(i);
// };

// Вариант 2

// const houses = [];

// let i = 0;
// while (i < 10) {
//   let houseNumber = i;
//   let house = function () {
//     console.log(houseNumber);
//   }
//   houses.push(house);
//   i++;
// };

// houses[0](); // 0
// houses[7](); // 7

// Вариант 3

const houses = [];

let i = 0;
while (i < 10) {
  let house = function () {
    let houseNumber = i;
    console.log(houseNumber);
  }
  houses.push(house);
  i++;
};

houses[0](); // 0
houses[7](); // 7