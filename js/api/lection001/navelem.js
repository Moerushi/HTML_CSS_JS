console.log(document.documentElement); // html
console.log(document.body); // body
console.log(document.head); // head

console.log(document.body.firstChild); // текстовый блок перед первым тегом
console.log(document.body.lastChild); // самый последний перед body
console.log(document.body.childNodes); // возвращается все переносы
console.log(document.body.children); // возвращает коллекцию, но тегов

// for (let val of document.body.children) {
//     console.log(val.localName === 'div' ? 'This is DIV' : 'This is not DIV');
// }

// for (let val of document.body.childNodes) {
//     console.dir(val.nodeType);
// }

// for (let val of document.body.childNodes) {
//     console.dir(val.nodeValue);
// }

// dom.spec.whatwg.org/#node тут расшифровка цифр по предыдущим двум блокам кода

// свойства узлов

console.log(document.body.firstElementChild.nodeType); // 1
console.log(document.body.firstElementChild.nodeName); // DIV
console.log(document.body.firstElementChild.tagName); // DIV
console.log(document.body.firstElementChild.nodeValue); // null
console.log(document.body.firstElementChild.data); // undefined
console.log(document.body.firstElementChild.outerHTML); // line with code
console.log(document.body.firstElementChild.hidden); // false
console.log(document.body.firstElementChild.style); // style
console.log(document.body.firstElementChild.className); // class
console.log(document.body.firstElementChild.innerHTML); // content
console.log(document.body.firstElementChild.textContent); // content
