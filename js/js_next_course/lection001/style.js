const heading = document.querySelector('.title');
heading.textContent ='Мой первый заголовок из JS';
console.log(heading);
const text = document.querySelectorAll('.text');

text.forEach(element => {
  console.log(element);
});

const listElements = document.getElementsByClassName('list');
console.log(listElements);
const listElsQs = document.querySelectorAll('.list');
console.log(listElsQs);
const heading3 = document.querySelector('#heading');
console.log(heading3);
heading3.remove();

const buttonElement = document.querySelector('.btn');
console.log(buttonElement);

const pElement = document.createElement('p');
pElement.textContent = 'Any text';

const contentElement = document.querySelector('.content');

const imgElement = document.querySelector('.img');


imgElement.onclick = function() {
  imgElement.src = 'newphoto.jpg';
};

buttonElement.onclick = function() {
  buttonElement.textContent = 'In Cart';
  contentElement.appendChild(pElement);
}