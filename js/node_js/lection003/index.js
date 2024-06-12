// объект и свойства объекта global

console.log(process.version); // версия node.js
console.log(process.arch); // архитектура процессора
console.log(process.pid); // текущий процесс в ОС
console.log(process.cwd()); // директория скрипта

console.log(__dirname); // выводит директорию скрипта
console.log(__filename); // путь к самому скрипту

// встроенные модули
const fs = require('fs'); // для чтения файлов

fs.readFile("./test.txt",'utf-8',(err,data)=>{ // открывает текущий файл и счтывает данные
if (err){
    console.error(err);
} else {
    console.log(data);
}
});

try {
    const read = fs.readFileSync("./test.txt",'utf-8'); // синхронная, блокирует поток js, дальше код исполняться не будет, нельзя использовать при работающем сервере, ммогут быть ошибки и нужно использовать try catch
    console.log(read);
} catch (err) {
    console.error(err);
}

fs.writeFile("./test.txt","1!\n",(err) =>{ // создает и записывае (презаписывает информацию в файле)
    if (err) {
        console.error(err);
    }
    console.log('The file was saved!');
});

fs.appendFile("./test.txt","2!\n",(err) =>{ // создает и вносит данные в файл
    if (err) {
        console.error(err);
    }
    console.log('The file was saved!');
});

try {
    fs.appendFileSync("./test.txt","3!\n");
    console.log("Success!");
} catch (err) {
    console.error(err);
}

// модуль path позволяет работат с путями в fs

const path = require('path');
console.log(path.join('/Users/nikitamatveev','Documents/Repo/HTML_CSS_JS/js/node_js/lection003/index.js')); // выведет путь
console.log(path.parse('/Users/nikitamatveev/Documents/Repo/HTML_CSS_JS/js/node_js/lection003/index.js')); //выведет объект пути
console.log(path.dirname('/Users/nikitamatveev/Documents/Repo/HTML_CSS_JS/js/node_js/lection003/index.js')); // выведет директорию
console.log(path.extname('/Users/nikitamatveev/Documents/Repo/HTML_CSS_JS/js/node_js/lection003/index.js')); // выведет расширение файла

// модуль os позволяет получить информацию об OS
const os = require('os');
console.log(os.cpus()); // о ядре
console.log(os.arch()); // об архитектуре
console.log(os.freemem()); // свободной пмяти в байтах
console.log(os.totalmem() / 1024 / 1024 / 1024); // общее кол-во памяти в Гб

// модуль url позволяет работать с url и их компонентами

// модуль crypto позволяет работать с криптографией и разными функциями

// модуль stream управлять большими потоками данных

// модуль express
