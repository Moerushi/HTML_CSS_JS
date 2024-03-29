// Задание 4 (тайминг 15 минут)
// 1 Создать элемент button, добавить в блок <div
// class="content"></div>
// 2 При клике на который в консоль выводится сколько раз
// пользователь нажал на данную кнопку

const btnEl = document.createElement("button");
let count = 0;
divEl.appendChild(btnEl);
btnEl.innerHTML = "Button нажми на меня";
btnEl.onclick = function (e) {
  count++;
  console.log(count);
};
