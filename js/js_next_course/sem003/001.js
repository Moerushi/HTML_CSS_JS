// В html создать кнопку button
// После загрузки страницы вывести в консоль текст “страница загрузилась”
window.addEventListener('load',(e)=> console.log('страница загрузилась'));
// Добавить событие onclick которое выводит в консоль текст “событие onclick”
const buttonElem = document.querySelector('.onclick-button');
buttonElem.onclick = () => console.log('событие onclick');
// Добавить событие addEventListener которое выводит в консоль текст “событие addEventListener”
buttonElem.addEventListener ('click', () => console.log('событие addEventListener'));