// Создать в html список состоящий из 3-х произвольных элементов li
// Нужно создать кнопку которая будет добавлять элементы списка с текстом “новый элемент списка”
const addListItem = document.querySelector('.add-list-item');
const ulList = document.querySelector('ul');
addListItem.addEventListener('click', () => {
  if (document.querySelector('p')) {
    document.querySelector('p').remove();
  }
  const newLi = document.createElement('li');
  newLi.innerHTML = Math.trunc(Math.random() * 10);
  ulList.append(newLi);
})
// Создать кнопку, которая будет удалять первый элемент из созданного списка
const removeFirstListItem = document.querySelector('.remove-first-list-item');
removeFirstListItem.addEventListener('click', () => {
  if (ulList.firstElementChild) {
    ulList.removeChild(ulList.firstElementChild);
  } else {
    if (!document.querySelector('p')) {
      const noElemets = document.createElement('p');
      noElemets.innerHTML = 'Элементы закончились!'
      ulList.after(noElemets);
    }
  }

});
// Создать кнопку, при клике на которую ей добавляется класс “click”
const clickButton = document.querySelector('button:not([class])');
clickButton.addEventListener('click', () => {
  clickButton.classList.add('click');
});
