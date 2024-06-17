const handlebars = require('handlebars');

const template = handlebars.compile('<p>{{someVar}}</p>'); // задаем шаблон
const result = template({ someVar: 'Hello!' }); // поставляем в шаблон
console.log(result);

// условия
const templateIf = handlebars.compile(
    '{{#if bold}} <b>Hello!</b> {{else}} <p>Hello!</p> {{/if}}'
);
console.log(templateIf({ bold: true }));
console.log(templateIf({ bold: false }));

// циклы
const items = [
    { name: 'first item', number: 3 },
    { name: 'second item', number: 5 }
];

const templateEach = handlebars.compile(
    '{{#each items}}<p>{{this.name}} {{this.number}}</p>{{/each}}'
);
console.log(templateEach({ items }));