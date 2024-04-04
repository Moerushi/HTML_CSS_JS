"use strict";

// 1. Ко всем элементам, имеющим класс "dropdown-item" добавить еще один класс "super-dropdown", необходимо использовать методы forEach и querySelectorAll и свойство classList у элементов.
const dropdownElement = document.querySelectorAll('div.menu a.dropdown-item');
dropdownElement.forEach(element => {
  element.classList.add('super-dropdown');
});
// 2. У элемента с классом btn необходимо убрать класс "btn-secondary", если он присутствует у этого элемента, либо добавить, если такого класса у элемента не было.
const buttonElem = document.querySelector('div.dropdown button.btn');
if (buttonElem.classList.contains('btn-secondary')) {
  buttonElem.classList.remove('btn-secondary');
} else {
  buttonElem.classList.add('btn-secondary');
}

// 3. Необходимо удалить класс "dropdown-menu" у элемента, у которого присутствует класс "menu".
const dropdownMenu = document.querySelector('div.menu');
dropdownMenu.classList.remove('dropdown-menu');

// 4. Используя метод insertAdjacentHTML добавьте после div'a с классом "dropdown" следующую разметку: <a href="#">link</a>
const dropdownDiv = document.querySelector('div.dropdown');
dropdownDiv.insertAdjacentHTML('afterend','<a href="#">link</a>');

// 5. У элемента с id "dropdownMenuButton" замените id на "superDropdown".
const menuButton = document.querySelector('#dropdownMenuButton');
menuButton.setAttribute('id', 'superDropdown');

// 6. Добавьте атрибут data-dd со значением 3 элементу у которого существует атрибут "aria-labelledby" равный "dropdownMenuButton" используя dataset.
const ariaLabelledbyElem = document.querySelector('div[aria-labelledby="dropdownMenuButton"]');
ariaLabelledbyElem.dataset.dd = 3;

// 7. Удалите атрибут type у элемента с классом "dropdown-toggle".
const dropdownToggle = document.querySelector('button.dropdown-toggle');
dropdownToggle.removeAttribute('type');