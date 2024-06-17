const express = require('express');
const { engine } = require('express-handlebars'); // импортируем только engine, а не все

const app = express();

app.engine('handlebars', engine()); // первый аргумент - шаблонизатор, второй импортированный из express-handlebars, т.е. устанавливаем движок html для работы
// установка переменных окружения express
app.set('view engine', 'handlebars'); // каой движок используем для генерации html
app.set('views', './views'); // указываем директорию, где будут храниться шаблоны

const articles = [
    { title: 'Article 1', description: 'First awesome article' },
    { title: 'Article 2', description: 'Second awesome article' },
    { title: 'Article 3', description: 'Third awesome article' }
];

app.get('/', (req, res) => {
    res.render('home', {layout: 'main', title: 'Main home', articles }); // render то, что хотим возвратить клиенту, где первый аргумент - название файла, а второй данный для генерации в файле для показа
});

app.get('/index', (req, res) => {
    res.render('home', { layout: 'index', title: 'Index home', articles }); // render то, что хотим возвратить клиенту, где первый аргумент - название файла, а второй данный для генерации в файле для показа
});

app.listen(3000);