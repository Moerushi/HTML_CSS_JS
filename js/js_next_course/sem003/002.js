// Создать в html три кнопки button с нумерацией (1, 2, 3 соответственно)
// Добавить клик на кнопку, чтобы в консоль выводилась именно та кнопка на которую мы нажали
const buttomElems = document.querySelectorAll('.btn-two');
buttomElems.forEach(element => element.addEventListener('click', (e) => console.log(e.target)));
// Добавить кнопку button с текстом 4, которая считает сколько раз на нее нажали и количество нажатий на эту кнопку выводит в консоль
let count = 1;
buttomElems[3].addEventListener('click', (e) => console.log(`На кнопку ${buttomElems[3].innerHTML} нажали ${count++} раз(а).`));
// Создать кнопку button с текстом 5, При клике на которую, меняется текст данной кнопки на “Вы нажали на эту кнопку”
buttomElems[4].addEventListener('click', (e) => buttomElems[4].innerHTML = 'Вы нажали на эту кнопку');
