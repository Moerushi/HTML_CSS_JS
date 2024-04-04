// С помощью querySelector найти элемент h2  и вывести в консоль всех его родителей
console.log('--- 3 задание ---');

const h2Elem = document.querySelector('h2.subtitle');

let currentElement = h2Elem;

while (currentElement.parentElement.tagName !== 'body'.toUpperCase()) {
  console.log(currentElement.parentElement);
  currentElement = currentElement.parentElement;
}

console.log('--- 3 задание (через рекурсию) ---');

function findParents(element) {
  console.log(element);
  if (element.parentElement.tagName !== 'body'.toUpperCase()) {
    findParents(element.parentElement);
  }
}
findParents(h2Elem);