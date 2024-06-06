// Напишите функцию createCounter, которая создает счетчик и возвращает объект с двумя методами: increment и decrement. Метод increment должен увеличивать значение счетчика на 1, а метод decrement должен уменьшать значение счетчика на 1. Значение счетчика должно быть доступно только через методы объекта, а не напрямую.

function createCounter() {
  return {
    counter: 0,
    increment() {
      return this.counter++;
    },
    decrement() {
      return this.counter--;
    },
    showValue() {
      return this.counter
    }
  };
};

const myCounter = createCounter();
myCounter.increment(); // 1
myCounter.increment(); // 2
myCounter.increment(); // 3
myCounter.decrement(); // 2
myCounter.decrement(); // 1
myCounter.increment(); // 2
console.log(myCounter.showValue()); // 2
