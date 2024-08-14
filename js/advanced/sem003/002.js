const inputEl = document.querySelector('input');
const saveBtn = document.querySelector('.save');
const loadBtn = document.querySelector('.load');
const clearBtn = document.querySelector('.clear');

const localStorageName = 'textInput';

saveBtn.addEventListener('click', () => {
    if (localStorage.getItem(localStorageName)) {
        console.log('Уже есть сохраненные данные! Необходимо нажать удалить или очистить!');
    } else {
        localStorage.setItem(localStorageName, inputEl.value);
        inputEl.value = '';
        console.log('Сохранено!');
    }
});

loadBtn.addEventListener('click', () => {
    if (!localStorage.getItem(localStorageName)) {
        console.log('Нет данных для загрузки!');
    } else {
        inputEl.value = localStorage.getItem(localStorageName);
        console.log('Загружено!');

    }
});

clearBtn.addEventListener('click', () => {
    localStorage.removeItem(localStorageName);
    console.log('Очищено!');

});