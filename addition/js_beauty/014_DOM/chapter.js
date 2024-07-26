const images = document.body.getElementsByTagName('img'); // получается коллекция
console.log(Array.from(images)); // но можно переделать в массив

for (let i = images.length - 1; i >= 0; i--) {
let image = images[i];
if(image.alt){
    let text = document.createTextNode(image.alt);
    image.parentNode.replaceChild(text,image);
}
};

let para = document.body.getElementsByTagName('p')[0];
console.log(para.clientHeight); //высота объекта 18
console.log(para.clientWidth); // ширина 972
console.log(para.getBoundingClientRect()); // возвращает все данные о занимаемом пространстве объекта
console.log(document.documentElement.scrollHeight);
console.log(document.documentElement.scrollWidth);
