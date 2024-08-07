// Задание 2
// Вы разрабатываете систему отзывов для вашего веб-сайта. Пользователи могут оставлять отзывы, но чтобы исключить слишком короткие или слишком длинные сообщения, вы решаете установить некоторые ограничения.

// Вы можете использовать этот массив initialData для начальной загрузки данных при запуске вашего приложения.

const initialData = [
    {
        product: "Apple iPhone 13",
        reviews: [
            {
                id: "1",
                text: "Отличный телефон! Батарея держится долго.",
            },
            {
                id: "2",
                text: "Камера супер, фото выглядят просто потрясающе.",
            },
        ],
    },
    {
        product: "Samsung Galaxy Z Fold 3",
        reviews: [
            {
                id: "3",
                text: "Интересный дизайн, но дорогой.",
            },
        ],
    },
    {
        product: "Sony PlayStation 5",
        reviews: [
            {
                id: "4",
                text: "Люблю играть на PS5, графика на высоте.",
            },
        ],
    },
];

// Создайте HTML-структуру с текстовым полем для ввода отзыва, кнопкой для отправки и контейнером, где будут отображаться отзывы.

const containerEl = document.querySelector('.container');

initialData.forEach((el) => {
    containerEl.insertAdjacentHTML('beforeend', createCard(el));
});

function createCard (el) {
    return `
    <div class="card">
      <h3 class="card__name">${el.product}</h3>
      <ul class="card__reviews">
      ${el.reviews.map(review => `<li class="card__review">${review.text}</li>`).join('')}
      </ul>
        <input class="card__input" type="text" name="add_feedback" required>
        <button class="card__button">Добавить отзыв</button>
    </div>
    `
}

// Напишите функцию, которая будет добавлять отзыв в контейнер с отзывами. Однако если длина введенного отзыва менее 50 или более 500 символов, функция должна генерировать исключение.

function addComment(event) {
    
    if (event.target.tagName.toLowerCase() !== 'button'){
        return;
    }


    const parentEl = event.target.closest('.card');
    const cardInputEl = parentEl.querySelector('.card__input');
    const ulEl = parentEl.querySelector('.card__reviews');

    if (cardInputEl.value.length >= 50 && cardInputEl.value.length <= 500) {
        ulEl.insertAdjacentHTML('beforeend', `<li class="card__review">${cardInputEl.value}</li>`);
        cardInputEl.value = '';
        } else {
            console.error('Неверная длина отзыва!');
        }
}

containerEl.addEventListener('click', event => addComment(event));

// При добавлении отзыва, он должен отображаться на странице под предыдущими отзывами, а не заменять их.