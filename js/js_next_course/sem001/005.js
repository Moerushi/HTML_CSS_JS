// Задание 4 (тайминг 20 минут)
// 1 Дан тег <div class="content"></div>
// 2 Создайте с помощью javascript новый элемент button
// 3 Добавьте текст для кнопки “Отправить”
// 4 При клике на данную кнопку необходимо чтобы текст
// поменялся на “Текст отправлен”

btnEl.classList.add("btn");
btnEl.style.color = "blue";

btnEl.onclick = function (e) {
  console.log(e);
  e.target.innerHTML = "Текст отправлен";
};

const bottNew = document.createElement('button');
bottNew.textContent = 'Новая кнопка';
divEl.appendChild(bottNew);
bottNew.onclick = function (e) {
    bottNew.innerHTML = 'Текст отправлен';
}