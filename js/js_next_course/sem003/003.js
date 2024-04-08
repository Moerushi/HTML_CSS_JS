// Создать кнопку, которая добавляем заголовок h1 с текстом, “Новый заголовок, данный элемент нужно расположить после кнопки
const addButtonElem = document.querySelector('.btn-add');
addButtonElem.addEventListener('click', (e) => {
  if (!document.querySelector('h1')) {
  const headingElem = document.createElement('h1');
  headingElem.innerHTML = 'Новый заголовок'
  addButtonElem.after(headingElem);
  }
});
// Создать вторую кнопку, которая будет удалять созданный заголовок h1
const delButtonElem = document.querySelector('.btn-del');
delButtonElem.addEventListener('click', () => {
  if (document.querySelector('h1')) {
    document.querySelector('h1').remove();
  }
});
// Создать третью кнопку, при наведении на которую в консоль будет выводиться текст “вы навели на данную кнопку” , как только вы убираем курсор мыши с кнопки, в консоли должен появиться текст “Наведения на кнопку больше нет”
const inOutButton = document.querySelector('.in-out-button');
inOutButton.addEventListener('mouseover', e => e.target.innerHTML = 'Вы навели на данную кнопку');
inOutButton.addEventListener('mouseleave', e => e.target.innerHTML = 'Наведения на кнопку больше нет');


