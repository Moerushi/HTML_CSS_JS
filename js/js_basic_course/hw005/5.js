"use strict";

/*
Необходимо создать объект, в котором будут объединены два массива en и ru 
так, чтобы в объекте ключами выступали значения из массива en, а значениями 
объекта являлись значения из массива ru.
*/

const en = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
const ru = [
  "понедельник",
  "вторник",
  "среда",
  "четверг",
  "пятница",
  "суббота",
  "воскресенье",
];

// Здесь пишем решение, данный комментарий необходимо стереть.
// const dictionary = {};
// for (let i = 0; i < en.length; i++) {
//   dictionary[en[i]] = ru[i];
// }
// console.log(dictionary);

const dict = {};
en.forEach((item, i) => dict[en[i]] = ru[i]);
console.log(dict);