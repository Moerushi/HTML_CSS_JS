// Создать поле ввода и под ним заголовок h1 с текстом “Заголовок”
// При вводе текста в поле ввода необходимо чтобы текст внутри заголовка менятся на введенный в поле ввода

const formElemTask4 = document.querySelector('.task3');

const inputForm = document.createElement('input');

const h1Heading = document.createElement('h1');
h1Heading.textContent = 'Заголовок';

formElemTask4.appendChild(inputForm);
formElemTask4.appendChild(h1Heading);

inputForm.addEventListener('input', (e) => (!e.target.value) ? h1Heading.textContent = 'Заголовок' : h1Heading.textContent = e.target.value);