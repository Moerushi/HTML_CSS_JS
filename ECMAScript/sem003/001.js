// Напишите функцию getPrototypeChain(obj), которая будет возвращать цепочку прототипов для заданного объекта obj. Функция должна вернуть массив прототипов, начиная от самого объекта и заканчивая глобальным объектом Object.prototype.


const result = [];
function getPrototypeChain(obj) {
    if (!Object.getPrototypeOf(obj)) return Object.getPrototypeOf(obj);
    result.push(Object.getPrototypeOf(obj));
    return getPrototypeChain(Object.getPrototypeOf(obj));
}

const Person = { proto: 'Person', personName: 'Georg' };
const CleverPerson = { proto: 'CleverPerson', __proto__: Person };
const VerySmartPerson = { proto: 'VerySmartPerson', __proto__: CleverPerson };

const arr = getPrototypeChain(VerySmartPerson);
console.log(result);
