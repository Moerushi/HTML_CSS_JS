// 1. Создайте объект calculator с методами add(), subtract() и multiply(), которые выполняют соответствующие математические операции над двумя числами. Используйте методы call и apply для вызова этих методов с передачей аргументов.
// console.log(calculator.add.call(null, 5, 3)); // Вывод: 8 console.log(calculator.subtract.apply(null, [5, 3])); // Вывод: 2

const Calculator = {
  add(firstNum, secondNum) {
    return firstNum + secondNum;
  },
  subtract(firstNum, secondNum) {
    return firstNum - secondNum;
  },
  multipy(firstNum, secondNum) {
    return firstNum * secondNum;
  } 
}

console.log(Calculator.add.call(null, 5, 3));
console.log(Calculator.subtract.apply(null, [5, 3]));

const Obj = {
  num1: 10,
  num2: 20
}

console.log(Calculator.add.call(Obj, Obj.num1, Obj.num2));
console.log(Calculator.add(Obj.num1, Obj.num2));
