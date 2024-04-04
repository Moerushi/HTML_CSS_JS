const conntent = document.querySelector('.content');

const h1El = document.createElement('h1');
h1El.textContent = 'h1 Element';

h1El.setAttribute('class', 'heading');

conntent.appendChild(h1El);

const liEl = document.querySelectorAll('.menu__list');
const liElOne = document.querySelector('.menu__list');
const linkEl = document.querySelector('.menu__link');
const menuEl = document.querySelector('.menu');

console.log(liEl);
console.log(liElOne.parentNode.children);
console.log(linkEl.children);
console.log(linkEl.childNodes);

console.log(liElOne);
console.log(liElOne.lastElementChild);
console.log(liElOne.lastChild);

console.log(liElOne.parentElement.lastElementChild);
console.log(liElOne.parentElement.lastChild);
console.log(liElOne.parentElement.firstElementChild);

console.log(liElOne.nextElementSibling);
console.log(liElOne.nextElementSibling.nextElementSibling);
console.log(liElOne.nextElementSibling.nextElementSibling.previousElementSibling);



console.log('--------');
console.log(menuEl.children);
console.log(menuEl.childNodes);

menuEl.childNodes.forEach(element => {
  console.log(element);
});

const divElement = document.querySelector('.children');
console.log(divElement.childNodes.length);
console.log(divElement.children.length);

Array.from(divElement.childNodes).forEach((childNode) => {
  console.log('childNode "%s" типа "%d"', childNode.nodeName, childNode.nodeType)
});

[...divElement.children].forEach((child) => {
  console.log('child "%s" типа "%d"', child.nodeName, child.nodeType);
});
