console.log(`2 === 2 (${2 === 2})`);
console.log(`2 === 6 (${2 === 6})`);
console.log(`2 !== 6 (${2 !== 6})`);

console.log(`1 === '1' (${1 === '1'})`);
console.log(`null !== 1 (${null !== 1})`);

let age = 20;
age ++;
++age;
console.log(age);

let insert = document.querySelector('.insert');
let userInput = prompt('Зимой и летом, одним цветом', 'лампочка').toLowerCase();
userInput === 'елка' ? insert.textContent = 'Поздравляю!' : insert.textContent = 'Не угадал!';