// HTTP server

const http = require('http');

const server = http.createServer((request, response) => { // работает каждый раз при обращении к серверу
    // разные варианты делаются через switch case
    if (request.url === "/") { // тут сверяем с запросом на сервер 
        response.writeHead(200, {'Content-Type': 'text/html; charset=UTF-8'}); // тут выдаем ответ на запрос
        response.end('Main');
    } else if (request.url === "/about"){
        response.writeHead(200, {'Content-Type': 'text/html; charset=UTF-8'});
        response.end('About');
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