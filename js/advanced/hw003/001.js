// Создайте интерактивную веб-страницу для оставления и просмотра отзывов о продуктах. Пользователи могут добавлять отзывы о различных продуктах и просматривать добавленные отзывы.

// Страница добавления отзыва:

// Поле для ввода названия продукта.
// Текстовое поле для самого отзыва.
const inputText = document.querySelector('.text-area');
const reviewsEl = document.querySelector('.reviews');

// Кнопка "Добавить отзыв", которая сохраняет отзыв о продукте в LocalStorage.
const addBtn = document.querySelector('.add');

const reviewsData = `[]`;
const storageName = 'reviews';

if (!localStorage.getItem(storageName)) {
    localStorage.setItem(storageName, reviewsData);
}

const reviews = JSON.parse(localStorage.getItem(storageName));
console.log(reviews);

reviewsEl.innerHTML = reviews.map((element) => createElements(element)).join('');

addBtn.addEventListener('click', () => {
    if (inputText.value === ''){
        inputText.placeholder = 'Ничего не ввели :(';
        return;
    } 
    const newReview = {
        id: Date.now(),
        content: inputText.value
    };
    reviews.push(newReview);
    localStorage.setItem(storageName, JSON.stringify(reviews));
    reviewsEl.insertAdjacentHTML('beforeend', createElements(newReview));
    inputText.value = '';
    symbolCount.innerHTML = '0';
});

function createElements(data) {
    return `<div class="review" data-id="${data.id}">
        <span>${data.content}</span>
        <button class="delete"><i class="fa fa-ban" aria-hidden="true"></i></button>
        </div>
        `;
}

// Страница просмотра отзывов:

// Показывает список всех продуктов, о которых были оставлены отзывы.
// При клике на название продукта отображается список всех отзывов по этому продукту.
// Возможность удаления отзыва (при нажатии на кнопку "Удалить" рядом с отзывом, данный отзыв удаляется из LocalStorage).

reviewsEl.addEventListener('click', (e) => {
    if (e.target.tagName.toLowerCase() === 'i') {
        reviews.splice(reviews.findIndex((review) => review.id === e.target.closest('.review').getAttribute('data-id')), 1);
        localStorage.setItem(storageName, JSON.stringify(reviews));
        e.target.closest('.review').remove();
    }
});