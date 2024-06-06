// Напишите функцию createGreeting, которая принимает имя пользователя и возвращает функцию, которая будет выводить приветствие с использованием этого имени.
// // Пример использования:
// const greeting = createGreeting('John');
// greeting(); // Ожидаемый результат: "Hello, John!"

function createGreeting (userName) {
  return function greeting() {
return `Hello, ${userName}!`
  }
};

const greeting = createGreeting('John');
console.log(greeting());