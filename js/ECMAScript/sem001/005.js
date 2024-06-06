// Задача: Напишите функцию createPasswordChecker, которая принимает допустимую длину пароля в качестве аргумента и возвращает функцию для проверки введенного пароля. Возвращаемая функция должна принимать пароль и возвращать true, если его длина соответствует допустимой, и false в противном случае.
// // Пример использования:
// const isPasswordValid = createPasswordChecker(8); console.log(isPasswordValid('password')); // Ожидаемый результат: false
// console.log(isPasswordValid('secret')); // Ожидаемый результат: true

function createPasswordChecker (length) {
 return function (passwrd) {
  return passwrd.length < length;
 }
};

const check = createPasswordChecker(8);
console.log(check('12345678'));
console.log(check('secret'));