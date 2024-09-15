// // вариант по учебнику
// let cx = document.querySelector('.canvas3').getContext('2d');
// let img = document.createElement('img');
// img.src = 'https://eloquentjavascript.net/img/player.png'; // изображение должно быть в 1 линию
// let spriteW = 24, spriteH = 30;
// img.addEventListener('load', () => {
//     let cycle = 0;
//     setInterval(() => { // очищает и отрисовывает изображение с интервалом 120 мс
//         cx.clearRect(0, 0, spriteW, spriteH);
//         cx.drawImage(img, 
//             // исходный прямоугольника на картинке
//             cycle * spriteW, 0, spriteW, spriteH, // x 0 y 0 - изменяется каждый раз, ширина 24 высота 30 
//             //прямоугольная область, куда надо вписать изображение
//              0, 0, spriteW, spriteH); // x 0 y 0 ширина 24 высота 30
//         cycle = (cycle + 1) % 8; // увеличивается до 7, а потом обнуляется при остатке 0 от деления
//     }, 120
// );
// });

// мой вариант с котиком
let cx = document.querySelector('.canvas3').getContext('2d');
let img = document.createElement('img');
img.src = 'https://img.freepik.com/free-vector/hand-drawn-animation-frames-element-collection_23-2149845056.jpg'; // изображение должно быть в 1 линию
let spriteW = 190, spriteH = 400;
img.addEventListener('load', () => {
    let cycleX = 0;
    let addHeight = 0;
    setInterval(() => {
        cx.clearRect(0, 0, spriteW, spriteH);

        cx.drawImage(img,
            cycleX * spriteW + 25,  addHeight + 60, spriteW, spriteH,
            0, 0, spriteW, spriteH);

        if (cycleX === 2 && addHeight === 0) {
            addHeight += 190;
        } else if (cycleX === 2 && addHeight === 190) {
            addHeight -= 190;
        }
        cycleX = (cycleX + 1) % 3;

    }, 120
    );
});

// мой вариант с птичкой
// let cx = document.querySelector('.canvas3').getContext('2d');
// let img = document.createElement('img');
// img.src = 'https://behindthebeyond.com/Documents/Images/Blog/making-things-move/Large/birdspritesheet.png';
// let spriteW = 128, spriteH = 400;
// img.addEventListener('load', () => {
//     let cycle = 0;
//     setInterval(() => {
//         cx.clearRect(0, 0, spriteW, spriteH);
//         cx.drawImage(img, 
//             // исходный прямоугольника на картинке
//             cycle * spriteW, 0, spriteW, spriteH,
//             //прямоугольная область, куда надо вписать изображение
//              0, 0, spriteW, spriteH); 
//         cycle = (cycle + 1) % 5;
//     }, 120
// );
// });

// с преобразованием 
// function flipHorizontally(context, around) {
//     context.translate(around, 0);
//     context.scale(-1, 1);
//     context.translate(-around, 0);
// }

// let cx = document.querySelector('.canvas3').getContext('2d');
// let img = document.createElement('img');
// img.src = 'https://eloquentjavascript.net/img/player.png';
// let spriteW = 24, spriteH = 30;
// img.addEventListener('load', () => {
//     flipHorizontally(cx, 100 + spriteW / 2);
//         cx.drawImage(img, 
//             0, 0, spriteW, spriteH,
//              100, 0, spriteW, spriteH);
// });