"use strict";

// 1. При изменении значения в input с id="from", значение содержащееся в нем должно моментально отображаться в span. То есть при печати в input'е тег span также должен меняться.
const inputIdFrom = document.querySelector('#from');
const spanToChange = document.querySelector('span');
inputIdFrom.addEventListener('input', (e) => spanToChange.innerHTML = e.target.value)

// 2. При клике на кнопку с классом messageBtn необходимо элементу с классом message:
// - добавить два класса: animate_animated и animate_fadeInLeftBig
// - поставить данному элементу стиль visibility в значение 'visible'.
const messageBtn = document.querySelector('button.messageBtn');
const messageDiv = document.querySelector('div.message');
messageBtn.addEventListener('click', (e) => {
  messageDiv.classList.add('animate_animated');
  messageDiv.classList.add('animate_fadeInLeftBig');
  messageDiv.style.visibility = 'visible';
});

// 3. Необходимо при отправке формы проверить, заполнены ли все поля в этой форме. Если какое-либо поле не заполнено, форма не должна отправляться, также должны быть подсвечены незаполненные поля (необходимо поставить класс error незаполненным полям). Как только пользователь начинает заполнять какое-либо поле, необходимо, при вводе в данное поле, произвести проверку:
// - Если поле пустое, необходимо данное поле подсветить (поставить класс error данному полю).
// - Если поле было чем-либо заполнено, подсветку (класс error) необходимо убрать.
const submitForm = document.querySelector('form button');
const inputForms = submitForm.parentElement.querySelectorAll('.form-control');

submitForm.parentElement.addEventListener('submit', (e) => {
  inputForms.forEach(element => {
    if (!element.value) {
      element.classList.add('error');
      e.preventDefault();
    } else {
      element.classList.remove('error');
    }
  });
});

inputForms.forEach(element => element.addEventListener('input', (e) => {
  if (!element.value) {
    element.classList.add('error');
    e.preventDefault();
  } else {
    element.classList.remove('error');
  }
}));