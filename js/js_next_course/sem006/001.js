// Задание 1
// 1. Дан макет
// https://www.figma.com/file/mZwLT9fKktsWuVyfQRoST1/sh op-(Copy)-(Copy)?node-id=73%3A140 в котором представлены товары на странице корзины
// 2. Необходимо создать файл data.js в котором создать переменную dataProducts в которую присвоить JSON данные по товарам.
// 3. Вам нужно самостоятельно создать JSON данные (не забыть про кавычки для ключей и значений
// 4. Добавить все данные из макета, чтобы в дальнейшим по ним мы смогли создать вёрстку

// Задание 2
// 1. Создаём вёрстку по данному макету
// 2. Добавляем все теги и стили для них, чтобы получилось
// один в один как в макете
// 3. Пока данные для шаблонизации использовать не нужно

// Задание 3
// 1. Создаём блоки с помощью javascript для этого используем данные из dataProducts
// 2. Формируем товары на основе нашей вёрстки
// 3. Проверяем, как будет выглядеть сайт, если в json данных, добавить
// еще один объект с товаром (в вёрстке должен появиться еще один блок, на основе этих данных)

const data = JSON.parse(dataSet);

const cartContainer = document.querySelector('div.container');


data.forEach(element => {
  const tempEl = document.getElementById('cartTemplate');
  const clone = tempEl.content.cloneNode(true);
  clone.querySelector('.shopping-cart__left__img').src = element.url;
  clone.querySelector('.shopping-cart__left__heading').innerHTML = element.name + ' ' + element.category;
  clone.querySelector('.shopping-cart__left__text_highlight').innerHTML = element.price;
  clone.querySelector('.shopping-cart__left__text_color').innerHTML = element.color;
  clone.querySelector('.shopping-cart__left__text_size').innerHTML = element.size;
  clone.querySelector('.shopping-cart__left__text_border').innerHTML = element.quantity;

  cartContainer.appendChild(clone);
});

