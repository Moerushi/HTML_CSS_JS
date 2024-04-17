// В html создать элемент checkbox и текст рядом с ним “Согласен с условиями”
// Добавить кнопку отправить
// При клике на кнопку отправить нужно проверять выбран ли активным элемент checkbox
// Если элемент не выбран, добавить текст под чекбоксом “Необходимо согласиться с условиями”

const formElem = document.querySelector('.task1');

const checkboxElem = document.createElement('input');
checkboxElem.setAttribute('type', 'checkbox');

const labelToCheckBox = document.createElement('label');
labelToCheckBox.innerHTML = 'Согласен с условиями!';
labelToCheckBox.style.display = 'flex';
labelToCheckBox.style.gap = '20px';

const buttonEl = document.createElement('button');
buttonEl.innerHTML = 'Отправить!'

formElem.appendChild(labelToCheckBox);

labelToCheckBox.prepend(checkboxElem);
labelToCheckBox.appendChild(buttonEl);

formElem.addEventListener('submit', e => {
  if (!checkboxElem.checked) {
    const h1Elem = document.createElement('h1');
    h1Elem.innerHTML = 'Необходимо согласиться с условиями';
    formElem.appendChild(h1Elem);
    e.preventDefault();
  }
});