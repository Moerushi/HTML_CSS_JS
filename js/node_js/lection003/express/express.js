const path = require('path');

// для работы с express необходимо скачать модуль с npm

const express = require('express');

const app = express();

// промежуточный обработчик
app.use((req,res,next)=>{
    console.log(`Поступил запрос ${req.method} ${req.url}`);
    next(); // говорит о том, что нужно вызвать основной обработчик
});

//может быть неограниченное кол-во обработчиков
app.get('/',(req,res) => {  // создает обработчик
res.send('Welcome!');
});
app.get('/about',(req,res) => {  // создает обработчик
    res.send('About!');
    });

// для прогрузки html страницы
app.get('/file',(req,res)=> {
    res.sendFile(path.join(__dirname,'index.html'))
});

// статический файл
app.use(express.static('static')); // определяет директорию хранения статических файлов
app.get('/test', (req,res) =>{
    res.sendFile('static/index.html');
});

const port = 3000;

app.listen(port,()=>{
    console.log(`Server is working at ${port} port.`);
});