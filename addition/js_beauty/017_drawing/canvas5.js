// save
// restore
// resetTransform

let cx = document.querySelector('canvas').getContext('2d');
function branch(length, angle, scale) {
    cx.fillRect(0, 0, 1, length); // рисует прямую линию
    if (length < 8) return;
    cx.save(); // сохраняет преобразование (прямую линию)
    cx.translate(0, length); // перемещает линию на 0 по x и на 60 по y
    cx.rotate(-angle); // поворачивает на угол
    branch(length * scale, angle, scale); // вызывает рекурсию для построения правой стороны
    cx.rotate(2 * angle); // поворачивает зеркально
    branch(length * scale, angle, scale); // вызывает рекурсию для построения левой стороны
    cx.restore(); // извлекает состояние из верхней части стека
}
cx.translate(300, 0); //изменяем изначальное положение по х
branch(50, 0.5, 0.8);