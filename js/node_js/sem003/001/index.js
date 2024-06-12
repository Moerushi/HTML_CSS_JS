const fs = require('fs');
const path = require('path');

const fileConst = path.join(__dirname, 'person.json');

const obj = {
    name: "Ivan",
    surname: "Ivanov",
    age: 30,
    city: "Moscow"
};

fs.writeFileSync(fileConst, JSON.stringify(obj,null,4));
// null вместо массива ключей в методе JSON.stringify
// 4 кол-во отступов в методе JSON.stringify

const newObj = JSON.parse(fs.readFileSync(fileConst));
newObj.age -=10;
newObj.city = 'Ekaterinburg';
fs.writeFileSync(fileConst, JSON.stringify(newObj,null,4));
