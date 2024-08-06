let counter = 1;
let isFetching = false;

const containerEl = document.querySelector('#photo-container');

async function fetchPhotosList(pageNum) { // делаем функцию асинхронной, всегда возвращает promice
    // возвращает промис, который когда-то выполнится, js не будет ждать, когда прийдет промис, await ставим перед тем, что подождать
    try {
        isFetching = true;
        const url = `https://api.unsplash.com/photos?page=${pageNum}`;
        const response = await fetch(url, { // ответ в виде объекта
            headers: { Authorization: `Client-ID ${accessKey}` }
        });

        if (!response.ok) {
            throw new Error(`Something goes wrong! Status: ${response.status}`);
        }
        return await response.json();
    } finally {
        isFetching = false;
    }

}

async function main() { // функция, которая загружается страница
    const photos = await fetchPhotosList(counter);
    photos.forEach(photo => {
        containerEl.insertAdjacentHTML('beforeend', createPhoto(photo));
    });
}

function createPhoto(photo) {
    return `<div><img class="photo-container__img" src="${photo.urls.regular}" alt="Some photo"></div>`;
}

document.addEventListener('DOMContentLoader', main());

document.addEventListener('scroll', async () => {
    if (document.documentElement.scrollTop + document.documentElement.clientHeight >= document.documentElement.scrollHeight - 100 && !isFetching) {
        counter++;
        const photos = await fetchPhotosList(counter);
        photos.forEach(photo => {
            containerEl.insertAdjacentHTML('beforeend', createPhoto(photo));
        });
    }
});