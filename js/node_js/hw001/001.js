// Напишите HTTP сервер и реализуйте два обработчика, где:
// — По URL “/” будет возвращаться страница, на которой есть гиперссылка на вторую страницу по ссылке “/about”
// — А по URL “/about” будет возвращаться страница, на которой есть гиперссылка на первую страницу “/”
// — Также реализуйте обработку несуществующих роутов (404).
// — * На каждой странице реализуйте счетчик просмотров. Значение счетчика должно увеличиваться на единицу каждый раз, когда загружается страница.

const http = require('http');
let counter = 0;

const server = http.createServer((request, response) => { 
    if (request.url === "/") {
        response.writeHead(200, {'Content-Type': 'text/html; charset=UTF-8'});
        response.end(`<h1>Main page</h1><a href="/about">To about page</a><p>Total number of clicks: ${counter}</p>`);
        counter++;
    } else if (request.url === "/about"){
        response.writeHead(200, {'Content-Type': 'text/html; charset=UTF-8'});
        response.end(`<h1>About</h1><a href="/">To main page</a><p>Total number of clicks: ${counter}</p>`);
        counter++;
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