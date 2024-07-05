const body = document.body;

const addButtonEl = document.createElement('button');
addButtonEl.id = 'addButton';
addButtonEl.innerHTML = 'Добавить элемент';
body.appendChild(addButtonEl);
const removeButtonEl = document.createElement('button');
removeButtonEl.id = 'removeButton';
removeButtonEl.innerHTML = 'Удалить элемент';
body.appendChild(removeButtonEl);
const cloneButtonEl = document.createElement('button');
cloneButtonEl.id = 'cloneButton';
cloneButtonEl.innerHTML = 'Клонировать элемент';
body.appendChild(cloneButtonEl);

const containerEl = document.createElement('div');
containerEl.id = 'container';
body.appendChild(containerEl);

for (let i = 0; i < 3; i++) {
    const boxEl = document.createElement('div');
    boxEl.classList.add('box');
    boxEl.innerHTML = i + 1;
    containerEl.appendChild(boxEl);
}

addButtonEl.addEventListener('click', () => {
    const newBox = document.createElement('div');
    newBox.classList.add('box');
    newBox.innerHTML = containerEl.querySelectorAll('.box').length + 1;
    containerEl.appendChild(newBox);
});

removeButtonEl.addEventListener('click', () => {
    containerEl.lastElementChild?.remove(); // ?. если не найдет значение, то он не выполнит и не выдаст ошибку
});

cloneButtonEl.addEventListener('click', () => {
    if (containerEl.lastElementChild) {
        const clone = containerEl.lastElementChild.cloneNode(true);
        containerEl.appendChild(clone);
    } else {
        alert('Нет элемента для клонирования!');
    }
});