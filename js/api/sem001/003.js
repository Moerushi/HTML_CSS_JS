const articlesBd = `[
    {
        "id": 1719908891143,
        "title": "Headind One",
        "text": "Some text One"
    },
    {
        "id": 1719908891144,
        "title": "Headind Two",
        "text": "Some text Two"
    }
]`;

const mainHeaderEl = document.createElement('h1');
mainHeaderEl.innerHTML = 'Мои статьи';
document.body.appendChild(mainHeaderEl);

const containerEl = document.createElement('div');
document.body.appendChild(containerEl);

const addButtonEl = document.createElement('button');
addButtonEl.innerHTML = 'Добавить статью';
document.body.appendChild(addButtonEl);

const storageName = 'localArticles';

if (!localStorage.getItem(storageName)) {
    localStorage.setItem(storageName, articlesBd);
}

const articles = JSON.parse(localStorage.getItem(storageName));

// вариант 1
// articles.forEach(element => {
//     containerEl.insertAdjacentHTML('beforeend', createArticleHtml(element));
// });

// вариант 2
containerEl.innerHTML = articles.map((element) => createArticleHtml(element)).join('');

document.querySelectorAll('.removeButton').forEach(element => {
    element.addEventListener('click', () => {      
        removeArticle(+element.closest('.article-box').getAttribute("data-id"));
        element.closest('.article-box').remove();
    });
});

function removeArticle(articleId){
    const articles = JSON.parse(localStorage.getItem(storageName));
    articles.splice(articles.findIndex((article) => article.id === articleId), 1);
    localStorage.setItem(storageName, JSON.stringify(articles));
}

addButtonEl.addEventListener('click', () => {
    const newArticle = {
        id: Date.now(),
        title: prompt('Введите заголовок статьи'),
        text: prompt('Введите текст статьи')
    };
    articles.push(newArticle);
    localStorage.setItem(storageName, JSON.stringify(articles));
    containerEl.insertAdjacentHTML('beforeend', createArticleHtml(newArticle));
});

document.querySelectorAll('.updateButton').forEach(element => {
    element.addEventListener('click', () => {
        const index = articles.findIndex((article) => article.id === +element.closest('.article-box').getAttribute("data-id"));
        articles[index].title = prompt('Введите новый заголовок статьи');
        articles[index].text = prompt('Введите новый текст статьи');

        element.closest('.article-box').querySelector('h1').innerHTML = articles[index].title;
        element.closest('.article-box').querySelector('p').innerHTML = articles[index].text;

        localStorage.setItem(storageName, JSON.stringify(articles));
    });
});

function createArticleHtml(article){
   return `<div class="article-box" data-id="${article.id}"><h1>${article.title}</h1><p>${article.text}</p><button class="removeButton">Удалить статью</button><button class="updateButton">Обновить статью</button></div>`
}