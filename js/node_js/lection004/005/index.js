const express = require('express');
const { checkBody, checkParams } = require('./validation/valitator');
const { articleSchema, idSchema } = require('./validation/scheme');

const app = express();

let uniqueID = 3;
const articles = [];

app.use(express.json());

/**
 * Получение всех статей
 */
app.get('/articles', (req, res) => {
    res.send({ articles });
});

/**
 * Получение конкретной статьи
 */
// checkParams() промежуточный обработчик
app.get('/articles/:id', checkParams(idSchema), (req, res) => { // идентификатор - параметр через двоеточие
    const article = articles
        .find((article) => article.id === Number(req.params.id)); // обращение к статье через параметр

    if (article) {
        res.send({ article });
    } else {
        res.status(404);
        res.send({ article: null });
    }
});

/**
 * Добавление новой статьи
 */
// валидация данных
app.post('/articles', checkBody(articleSchema), (req, res) => {
    uniqueID += 1;

    articles.push({
        id: uniqueID,
        ...req.body // добавление всех элементов объекта
    });

    res.send({
        id: uniqueID
    });
});

/**
 * Обновление существующей статьи
 */
app.put('/articles/:id', checkParams(idSchema), checkBody(articleSchema), (req, res) => { // id это объект

    const article = articles
        .find((article) => article.id === Number(req.params.id)); // обращение к статье через параметр

    if (article) {
        article.title = req.body.title;
        article.content = req.body.content;
        res.send({ article });
    } else {
        res.status(404);
        res.send({ article: null });
    }
});

/**
 * Удаление конкретной статьи
 */
app.delete('/articles/:id', checkParams(idSchema), (req, res) => {
    const article = articles
        .find((article) => article.id === Number(req.params.id)); // обращение к статье через параметр

    if (article) {
        const articleIndex = articles.indexOf(article);
        articles.splice(articleIndex, 1);
        res.send({ article });
    } else {
        res.status(404);
        res.send({ article: null });
    }
});

/**
 * Обработка несуществующего адреса
 */
app.use((req, res) => { // запускается, если не найден иной обработчик выше
    res.status(404).send({
        message: 'URL not found!'
    });
});

app.listen(3000);