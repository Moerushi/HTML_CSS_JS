// Необходимо с помощью querySelector найти параграф с классом text
// Вывести в консоль соседний элемент h2
// Вывести в консоль родительский элемент content
// Вывести в консоль картинку
// Вывести в консоль родительский элемент elem

console.log('--- 2 задание ---');
const textElem = document.querySelector('div.elem div.content p.text');
console.log(textElem.previousElementSibling.innerHTML);
console.log(textElem.parentElement.innerHTML);
console.log(textElem.parentElement.previousElementSibling);
console.log(textElem.parentElement.parentElement);
