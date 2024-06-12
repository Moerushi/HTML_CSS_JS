// Напишите HTTP сервер на express и реализуйте два обработчика “/” и “/about”, где:

// — На каждой странице реализован счетчик просмотров
// — Значение счетчика необходимо сохранять в файл каждый раз, когда обновляется страница
// — Также значение счетчика должно загружаться из файла, когда запускается обработчик страницы
// — Таким образом счетчик не должен обнуляться каждый раз, когда перезапускается сервер.

// Подсказка:
// Вы можете сохранять файл в формате JOSN,
// где в объекте ключом будет являться URL страницы, а значением количество просмотров страницы

// Формат сдачи работы:
// — Ссылка на гитхаб/гитлаб
// — Файл с кодом.

const http = require('http');
const fs = require('fs');
const path = require('path');

const file = path.join(__dirname, 'counter.json');
const counterObj = JSON.parse(fs.readFileSync(file));
console.log(counterObj);

const server = http.createServer((request, response) => { 
    if (request.url === "/") {
        response.writeHead(200, {'Content-Type': 'text/html; charset=UTF-8'});
        response.end(`<h1>Main page</h1><a href="/about">To about page</a><p>Total number of clicks: ${counterObj['/']}</p>`);
        counterObj['/']++;
        fs.writeFileSync(file, JSON.stringify(counterObj,null,4));
    } else if (request.url === "/about"){
        response.writeHead(200, {'Content-Type': 'text/html; charset=UTF-8'});
        response.end(`<h1>About</h1><a href="/">To main page</a><p>Total number of clicks: ${counterObj['/about']}</p>`);
        counterObj['/about']++;
        fs.writeFileSync(file, JSON.stringify(counterObj,null,4));
    } else {
        response.writeHead(404, {'Content-Type': 'text/html; charset=UTF-8'});
        response.end('Not found');
    }
} 
);

const port = 3000;

server.listen(port, () => {
    console.log(`Сервер запущен на порту ${port}`);
});