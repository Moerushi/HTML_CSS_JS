// Домашнее задание:

// Цель: Разработать веб-приложение, которое будет отображать новое случайное изображение из коллекции Unsplash, давая пользователю возможность узнать больше о фотографе и сделать "лайк" изображению.

// Регистрация на Unsplash:

// • Перейдите на веб-сайт Unsplash (https://unsplash.com/).
// • Зарегистрируйтесь или войдите в свой аккаунт. (если у вас не было регистрации до этого, новый аккаунт создавать не нужно).

// Создание приложения:

// • Перейдите на страницу разработчика Unsplash (https://unsplash.com/developers).
// • Нажмите "New Application".
// • Заполните необходимую информацию о приложении (можете использовать http://localhost для тестирования).
// • Получите свой API-ключ после создания приложения.

// Разработка веб-приложения:

// • Создайте HTML-страницу с элементами: изображение, имя фотографа, кнопка "лайк" и счетчик лайков.
const containerElement = document.querySelector('.user-container');

let isFetching = false;
document.addEventListener("DOMContentLoader", siteLoading());

const photosBd = `[]`;
const showedPhotos = 'showedPhotos';
if (!localStorage.getItem(showedPhotos)) {
    localStorage.setItem(showedPhotos, photosBd);
}
const photos = JSON.parse(localStorage.getItem(showedPhotos));
console.log(photos);

// • Используя JavaScript и ваш API-ключ, получите случайное изображение из Unsplash каждый раз, когда пользователь загружает страницу. Обратите внимание, что должно подгружаться всегда случайное изображение, для этого есть отдельная ручка (эндпоинт) у API.

async function getRandomPhoto() {
    try {
        isFetching = true;
        const response = await fetch(myUnsplashAccessKey);
        if (!response.ok) {
            throw new Error(`Ошибка от сервера. Статус: ${response.status}`);
        }
        return await response.json();
    } finally {
        isFetching = false;
    }
}

async function siteLoading() {
    const data = await getRandomPhoto();
    containerElement.insertAdjacentHTML('beforeend', addImage(data));
    searchLike();
}

function addImage(data) {
    return `
        <img src="${data.urls.small}" alt="${data.alt_description} photo" data-id="${data.id}">
        <p class="user-name">Photographer: ${data.user.first_name} ${data.user.last_name}</p>
        ${data.description === null ? '' : `<p class="user-description">About: ${data.description}</p>`}
        <i class="fa fa-heart fa-regular" aria-hidden="true"></i>
        <span class="likes-counter">${data.likes}</span>
        <p class="likes-counter">${data.id}</p>
        `;
}

// • Реализуйте функционал "лайка". Каждый раз, когда пользователь нажимает кнопку "лайк", счетчик должен увеличиваться на единицу. Одну фотографию пользователь может лайкнуть только один раз. Также должна быть возможность снять лайк, если ему разонравилась картинка.

function searchLike() {
    let userLikesPhoto = false;
    const heartEl = document.querySelector(".fa-heart");
    const likeCountEl = document.querySelector(".likes-counter");
    const id = heartEl.parentElement.querySelector('img').getAttribute("data-id");
    heartEl.addEventListener('click', () => {
        if (!userLikesPhoto) {
            heartEl.classList.remove("fa-regular");
            heartEl.classList.add("fa-solid");
            likeCountEl.innerHTML = Number(likeCountEl.innerHTML) + 1;
            userLikesPhoto = true;
            // сохранить в локальное хранилище - в разработке
            if (!photos.some(photo => photo.id === id)) {
                photos.push({id: id, likes: Number(likeCountEl.innerHTML)});
            }
            localStorage.setItem(showedPhotos, JSON.stringify(photos));
        } else {
            heartEl.classList.remove("fa-solid");
            heartEl.classList.add("fa-regular");
            likeCountEl.innerHTML = Number(likeCountEl.innerHTML) - 1;
            userLikesPhoto = false;
            // удалить из локального хранилища - в разработке
            if (photos.some(photo => photo.id === id)) {
                photos.splice(photos.findIndex((photo) => photo.id === id), 1);
            }
            localStorage.setItem(showedPhotos, JSON.stringify(photos));
        }
    });
}

// • Добавьте функцию сохранения количества лайков в локальное хранилище, чтобы при новой загрузке страницы счетчик не сбрасывался, если будет показана та же самая картинка.
function saveLikesInLocalStorage () {
    
}

// • Реализуйте возможность просмотра предыдущих фото с сохранением их в истории просмотров в localstorage.
// в разработке

// • Реализовать все с помощью async/await, без цепочем then.
// реализовано
