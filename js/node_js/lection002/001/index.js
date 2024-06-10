// npm init
// npm init -y установка с данными по умолчанию
// npm install uuid

const uuid = require('uuid'); // подключение модуля через npm из модуля package.json (dependencies)
const id = uuid.v4(); // создание uuid ключа
console.log(id);
console.log(uuid.NIL);
console.log(uuid.v1);
console.log(uuid.v2);
console.log(uuid.v3);
console.log(uuid.v5);

//node index.js в cmd

// node_modules – это каталог в вашем проекте npm, в котором хранятся все установленные пакеты и их зависимости.

// Каталог node_modules может быть очень большим и содержать много пакетов и файлов, поэтому его не рекомендуется добавлять в систему контроля версий, такую как Git. Вместо этого вы можете добавить файл .gitignore в ваш проект и указать в нём, что каталог node_modules должен быть игнорирован. Если другой разработчик скачает с Git ваш проект, то он всегда может установить все зависимости с помощью команды npm install, вследствие чего у него появится директория node_modules со всеми зависимостями.

// Для запуска всех зависимостей после скачанного проекта
// npm install - также установит обновления пакетов с значком ^
// npm ci - более безопасный, при котором происходит удаление и скачивание повторно

// npm uninstall <имя_пакета>

// npm install <package-name> --save-dev или npm install <package-name> -D -для установки devDependencies для работы локально, например, для отлаживание кода

// npm run <script-name> для запуска скрипта
// а если добавить, то в объект scripts

// Для экспорта функций и переменных в node.js нужно использовать объект module.exports

const math = require('./math');
const sum = math.add(1,2);
console.log(sum);
const sub = math.subtract(4,2);
console.log(sub);

// регистр проектов можно посмотреть тут https://www.npmjs.com
// для публикации необходимо зарегистрироваться на сайте https://www.npmjs.com/ 
// залогиниться в терминале npm login
// отправить на публикацию с помощью npm publish
// проверить наличие в реестре
// установить npm install <имя пакета>

// npm help или npm h – выводит справочную информацию о командах npm cli;
// npm uninstall <package-name> или npm un <package-name> – удаляет пакет из вашего проекта и из файла package.json;
// npm list или npm ls – выводит список всех установленных пакетов в вашем проекте и их версии;
// npm view <package-name> или npm v <package-name> – выводит информацию о пакете из npm registry, такую как имя, описание, версия, лицензия, зависимости и т. д.;
// npm search <keyword> или npm s <keyword> – ищет пакеты в npm registry по ключевому слову и выводит их названия и описания.