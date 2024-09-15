// изображения
let cx = document.querySelector('.canvas2').getContext('2d'); // используется для создания контекста, где будет происходить рисование
let img = document.createElement('img');
img.src = 'https://eloquentjavascript.net/img/hat.png';
img.addEventListener('load', () => {
    for(let x = 10; x < 200; x += 30){
        cx.drawImage(img, x, 10); // источник, x, y, ширина, высота, 6-9 определяют прямоугольную область на холсте, в которую это содержимое должно быть скопировано
    }
});

// clearRect - удаляет фон
