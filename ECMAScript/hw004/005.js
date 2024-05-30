// Задача 2:
// Необходимо реализовать отрисовку 10 картинок собак из API https://dog.ceo/dog-api/ с интервалом в 3 секунды.

const userUrl = 'https://dog.ceo/api/breeds/image/random';

const getData = async (url) => {
    try {
        const resp = await fetch(url);
        const data = await resp.json();
        return data;
    } catch (error) {
        console.log(error);
    }
};

const contentEl = document.querySelector('.content');

for (let i = 0; i < 10; i++) {
    setTimeout(async function timeout() {
        const fetchData = await getData(userUrl);
        console.log(fetchData);
        contentEl.insertAdjacentHTML('beforeend',`<img class="dog" src="${fetchData.message}">`);
    }, i*3000);
}