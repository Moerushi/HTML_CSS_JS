const weekDay = function () {
    const names = ['Monday', 'Thirsday', 'Wednesday', 'Tuesday', 'Friday', 'Saturday', 'Sunday'];
    return {
    name(number){return names[number]},
    number(name){return names.indexOf(name)}
    };
}(); // функция вызывается мнгновенно
console.log(weekDay.name(weekDay.number('Monday')));

// использование строки как кода и интерпретация как кода
// 1 способ
const x = 1;
function evalArnReturnX(code){
    eval(code);
    return x;
}
console.log(evalArnReturnX('var x = 2')); // 2 из 13 строки
console.log(x); // 1 из 11 строки
// 2 способ
let plusone = Function('n', 'return n + 1');
console.log(plusone(2));

// далее идет речь про npm модули

// const path = require('path');
// import path from 'path';