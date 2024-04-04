// Дано поле ввода и кнопка отправить, необходим реализовать функционал, если пользователь нажимает на кнопку отправить, а поле ввода пустое, то под полем ввода и кнопкой должен появиться заголовок h2 с текстом вы не заполнили поле ввода
// Цвет у рамки сделать красным

const buttonElem = document.querySelector('button.btn');
const inputElem = document.querySelector('input[type="text"]');

buttonElem.onclick = function() {
  if(!inputElem.value && !document.querySelector('form h2')) {
    const headingElem = document.createElement('h2');
    headingElem.innerHTML = 'Вы не заполнили поле ввода!'
    buttonElem.parentElement.appendChild(headingElem);
    inputElem.style.border = '1px solid red';
  }
};