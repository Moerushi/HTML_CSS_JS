// Задание 3 (тайминг 20 минут)
// 1 Дан тег <div class="content"></div>
// 2 Создайте новый элемент p
// 3 Добавьте в него текст “Новый текстовый элемент”
// 4 Добавьте созданный элемент внутри <div
// class="content"></div>
// 5 Удалите добавленный узел

const divEl = document.querySelector("div.content");
const pEl = document.createElement("p");
pEl.innerHTML = "Новый текстовый элемент";
divEl.appendChild(pEl);
pEl.remove();