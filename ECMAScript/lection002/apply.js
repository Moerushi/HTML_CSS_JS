// Объект Roomba - робот-пылесос. Код самого объекта смотри в первом листинге.
const notARobot = {
   counterOfStarts: 10,
};
// Пример использования метода apply, для вызова функции с передачей в качестве контекста объекта notARobot и передачей в неё аргументов arg1, arg2, arg3.
Roomba.startCleaning.apply(notARobot, [arg1, arg2, arg3]); // I am cleaning... I have been started:  11 times.