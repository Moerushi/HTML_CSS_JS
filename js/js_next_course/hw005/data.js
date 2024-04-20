// Повторить то, что делали на семинаре, либо

// Задание 1
// 1. Поиск в интернете (бесплатные api примеры).
// https://rickandmortyapi.com/api/character
// 2. Найти любые данные, на произвольную тему.
// https://rickandmortyapi.com/api/character
// 3. Создать файл data.js.
// 4. Создать переменную которая будет хранить данные из публичных api.
const data = [];
for (let page = 0; page < 5; page++) {
  data.push(fetch("https://rickandmortyapi.com/api/character/?page=" + page));
}
console.log(data);

// Задание 2
// 1. Создать файл index.html.
// 2. Подключить data.js.
// 3. Сформировать контент из данных (картинка загловок и параграф).
// 4. Добавить данный контент в вёрстку.
// 5. * Добавить стили при необходимости (по желанию).

const mainContainer = document.querySelector('.container');
const heading = document.createElement('h1');
heading.innerHTML = 'Rick and Morty characters list'
heading.style.textAlign = 'center';
heading.style.margin = '30px';
mainContainer.parentElement.prepend(heading);

data.forEach(dataElem => dataElem.then((response) => response.json()).then(result => result.results.forEach(element => {
  const characterBox = document.createElement('div');
  characterBox.classList.add('character-box');
  mainContainer.appendChild(characterBox);

  const elemImg = document.createElement('img');
  elemImg.src = element.image;
  elemImg.alt = element.name;
  characterBox.appendChild(elemImg);

  const charName = document.createElement('h2');
  charName.innerHTML = element.name;
  characterBox.appendChild(charName);

  const charRace = document.createElement('p');
  charRace.innerHTML = element.species;
  characterBox.appendChild(charRace);

  const charGender = document.createElement('span');
  charGender.innerHTML = ` (${element.gender})`;
  charRace.appendChild(charGender);

})));
