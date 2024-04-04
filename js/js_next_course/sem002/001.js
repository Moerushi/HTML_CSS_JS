console.log('--- 1 задание ---');
const newDiv = document.createElement('div');
newDiv.classList.add('item');

const mainDiv = document.querySelector('div.block');
mainDiv.appendChild(newDiv);
newDiv.innerHTML = 'Элемент внутри'; // лучше чем textContent, потому что могут прислать все что угодно
newDiv.setAttribute('class', newDiv.getAttribute('class') + ' item-1'); // чтобы добавить надо newDiv.getAttribute() +, но лучше через mainDiv.appendChild(newDiv);