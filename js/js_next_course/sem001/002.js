// Задание 2 (тайминг 15 минут)
// 1 Дан тег <a class="link" href="#">link text html</a>
// a. Вам необходимо поменять текст внутри ссылки на “link
// text js”
// b. Заменить href, на значение
// https://developer.mozilla.org/ru/
// 2 Дан тег <img class="photo" src="" alt="">
// a. Вам необходимо с помощью js поменять значение src на
// любое изображение из интернета
const linkEl = document.querySelector("a.link");
linkEl.innerHTML = "link text js";
linkEl.href = "https://developer.mozilla.org/ru/";
const imgEl = document.querySelector("img.photo");
imgEl.src = "https://mykaleidoscope.ru/x/uploads/posts/2022-09/1663110886_50-mykaleidoscope-ru-p-spokoinii-chelovek-vkontakte-62.jpg";