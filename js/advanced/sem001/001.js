function addMetaData (book, metaDataType, data) {
    book[metaDataType] = data;
}

function getMetaData (book, metaDataType) {
    return book[metaDataType];
}

const book = {
    title: '1984',
author: 'George Orwell'
}

const reviewSymbol = Symbol('review');
const raitingSymbol = Symbol('rating');
const tagsSymbol = Symbol('tags');

addMetaData(book, reviewSymbol, 'Good book about dystopia!');
addMetaData(book, raitingSymbol, 5);
addMetaData(book,tagsSymbol, 'dystopia');

console.log(getMetaData(book, reviewSymbol));
console.log(getMetaData(book, raitingSymbol));
console.log(getMetaData(book, tagsSymbol));