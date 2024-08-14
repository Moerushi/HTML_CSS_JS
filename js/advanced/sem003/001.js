const btnEl = document.getElementById('load-news');
const containerEl = document.querySelector('.container');

const mockDataBase = [
    { title: 'Новость 1', content: 'Содержание новости 1...' },
    { title: 'Новость 2', content: 'Содержание новости 2...' }
];

btnEl.addEventListener('click', () =>
    fetchNews()
        .then(data => {
            data.forEach(el => {
                const newsH = document.createElement('h2');
                newsH.textContent = el.title;
                containerEl.appendChild(newsH);
                const newsP = document.createElement('p');
                newsP.textContent = el.content;
                containerEl.appendChild(newsP);
            });
        })
        .catch((error) => {
            containerEl.textContent = `Ошибка: ${error}` 
        })
);

function fetchNews() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const rand = Math.random();
            console.log(rand);
            if (rand > 0.1) {
                resolve(mockDataBase);
            } else {
                reject('Сервер недоступен для загрузки данных 404!');
            }
        }, 2000);
    })
}