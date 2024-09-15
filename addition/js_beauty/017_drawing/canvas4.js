// преобразования
let cx = document.querySelector('canvas').getContext('2d');
cx.scale(-2, 2); // масштаб по горизонтали масштаб по вертикали
// при отрицательных значениях картинка перевернется
cx.beginPath();
cx.arc(-50, 50, 40, 0, 1.7 * Math.PI);
cx.lineWidth = 3;
cx.stroke();
// rotate - крутить
// translate - перемещать