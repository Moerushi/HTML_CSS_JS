const buttonEl = document.querySelector('.checkInput');
const messageEl = document.querySelector('.message');
const inputEl = document.querySelector('.input');

buttonEl.addEventListener('click', () => {
    try {
        if (!isFinite(inputEl.value)) {
            throw new Error('Введенное значение - не число!');
        }
        messageEl.innerHTML = 'Молодец!';
    } catch (error) {
        messageEl.innerHTML = error.message;
    }
});

