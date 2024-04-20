// 1. Создать файл index.html
// 2. Подключить data.js
// 3. Добавить блок <div class="content"></div>
// 4. Создать переменную data и добавить в нее JSON parse данные из файла data.js
// 5. Вывести в консоль объект data
// 6. С помощью foreach обойти массив data
// 7. Вывести все изображения из данных

const mainDiv = document.querySelector('div.container');

console.log(dataInfo);
const workData = JSON.parse(dataInfo);

workData.forEach(element => {
  const div = document.createElement('div');
  div.classList.add(element.class);
  const img = document.createElement('img');
  img.src = element.url;
  img.alt = element.text;
  img.width = element.width;
  img.height = element.heigth;
  mainDiv.appendChild(div);
  div.appendChild(img);
});

