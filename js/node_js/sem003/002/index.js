// 1. Инициализируйте проект NPM.
// 2. Установите библиотеку express.

const path = require('path');

const express = require('express');
const app = express();

// 3. Создайте файл index.js.

// 4. В файле напишите код который реализует два обработчика по URL “/” и URL “/about”.
// app.use((req, res, next) => {
//     console.log(`Поступил запрос ${req.method} ${req.url}`);
//     next();
// });

// app.get('/', (req, res) => { 
//     res.send('<h1>Main page!</h1><a href="/about">To about</a>');
// });
// app.get('/about', (req, res) => { 
//     res.send('<h1>About page!</h1><a href="/">To main</a>');
// });

// 5. В каждом обработчике верните HTML код, в котором есть заголовок и ссылка на соседнюю страницу.

app.use(express.static('static'));

const port = 3000;

app.listen(port, () => {
    console.log(`Server is working at ${port} port.`);
});