const images = document.body.getElementsByTagName('img'); // получается коллекция
console.log(Array.from(images)); // но можно переделать в массив

// for (let i = images.length - 1; i >= 0; i--) {
//     let image = images[i];
//     if (image.alt) {
//         let text = document.createTextNode(image.alt);
//         image.parentNode.replaceChild(text, image);
//     }
// };

let para = document.body.getElementsByTagName('p')[0];
para.setAttribute('data-test', 'test-value');
console.log(para.getAttribute('data-test'));
console.log(para.offsetHeight); //высота объекта 18
console.log(para.offsetWidth); // ширина 972
console.log(para.clientHeight); //высота объекта 18
console.log(para.clientWidth); // ширина 972
console.log(para.getBoundingClientRect()); // возвращает все данные о занимаемом пространстве объекта
console.log(document.documentElement.scrollHeight);
console.log(document.documentElement.scrollWidth);

// анимация картинки
const cat = document.querySelector('.cat');
let angle = Math.PI / 2;

function animate(time, lastTime) {
    if (lastTime != null) {
        angle += (time - lastTime) * 0.001;
    }
    cat.style.top = (Math.sin(angle) * 80) + "px";
    cat.style.left = (Math.cos(angle) * 160) + "px";
    requestAnimationFrame(newTime => animate(newTime, time));
}

requestAnimationFrame(animate);