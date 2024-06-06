// http в node.js

const http = require('http'); // название встроенного модуля

const server = http.createServer((req, res) => {
    //req - объект запроса
    //res - объект ответа
    console.log('Запрос получен');
    if (req.url === '/') {
        res.writeHead(200, { // позволяет установить код и заголовки ответа
            'Content-Type': 'text/html; charset=UTF-8', // в какой кодироке интерпертировать ответ
        });
        res.end('<h1>Добро пожаловать на сайт!</h1>'); // позволяет передать любую информацию на сайт
        // можно передать любой html код
    } else if (req.url === '/about') {
        res.writeHead(200, { // позволяет установить код и заголовки ответа
            'Content-Type': 'text/html; charset=UTF-8', // в какой кодироке интерпертировать ответ
        });
        res.end('<h1>Добро пожаловать в раздел about!</h1>'); // позволяет передать любую информацию на сайт
        // можно передать любой html код
    } else {
        res.writeHead(404, {
            'Content-Type': 'text/html; charset=UTF-8',
        });
        res.end('<h1>Страница не найдена!</h1>');
    }

});

const port = 3000; // всего может быть 65535 портов

server.listen(port, () => {
    console.log(`Сервер запущен на порту ${port}`);
});

// остановить через CTRL+C или через метод stop