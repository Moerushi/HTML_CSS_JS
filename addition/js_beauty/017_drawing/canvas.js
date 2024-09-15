// изображения svg
// элемент <canvas>

// двумерная графика OpenGL
// терхмерная графика WebGL

let context = document.querySelector('.canvas').getContext('2d'); // используется для создания контекста, где будет происходить рисование
context.fillStyle = 'red';
context.fillRect(10, 10, 100, 50); // рисует квадрат 10 сверху 10 слева 100 ширина 50 высота
context.strokeStyle = 'blue';
context.strokeRect(5, 5, 50, 50);
context.lineWidth = 5;
context.strokeRect(135, 5, 50, 50);
context.beginPath(); // начало пути рисования
context.lineWidth = 2;
context.strokeStyle = 'green';
for (let y = 10; y < 100; y += 10) {
    context.moveTo(10, y); // передвижение начинает новую фигуру
    context.lineTo(100, y); // рисование
}
context.stroke(); // присваивается контур

// треугольник
context.fillStyle = 'violet';
context.beginPath();
context.moveTo(50, 10); // начало рисунка
context.lineTo(10, 70); // перемещение в нижний угол треугольника
context.lineTo(90, 70); // перемещение в нижний правый утол треугольника
context.closePath(); // замыкает путь до ближайшей точки
context.fill(); // заливка

// кривые
context.strokeStyle = 'orange';
context.beginPath();
context.moveTo(10, 90);
context.quadraticCurveTo(60, 10, 90, 90); // 60 10 контрольная точка 90 90 целевая точка
context.lineTo(55, 10);
context.closePath();
context.stroke();

// кривая безье
context.strokeStyle = 'lightblue';
context.beginPath();
context.moveTo(10, 90);
context.bezierCurveTo(10, 10, 90, 10, 50, 90); // 10 10 первая контрольная 90 10 вторая 50 90 цель
context.lineTo(90, 10);
context.lineTo(10, 10);
context.closePath();
context.stroke();

// линия часть окружности
context.strokeStyle = 'purple';
context.beginPath();
context.arc(100, 100, 40, 0, 7); // 50 50 центр 40 радиус 0-7 угол в радианах
context.moveTo(200, 100);
context.arc(200, 100, 40, 0, 0.5 * Math.PI);
context.stroke();

// круговая диаграмма
const results = [
    { name: 'Удовлетворен', count: 1043, color: 'lightblue' },
    { name: 'Нормально', count: 563, color: 'lightgreen' },
    { name: 'Не удовлетворен', count: 510, color: 'pink' },
    { name: 'Без комментариев', count: 175, color: 'silver' }
];

let total = results.reduce((sum, { count }) => sum + count, 0);

let currentAngle = -0.5 * Math.PI; // начинаем сверху
for (let result of results) {
    let sliceAngle = (result.count / total) * 2 * Math.PI;
    context.beginPath();
    context.arc(400, 100, 100, currentAngle, currentAngle + sliceAngle);
    currentAngle += sliceAngle;
    context.lineTo(400, 100);
    context.fillStyle = result.color;
    context.fill();
}

// текст
context.font = 'bold italic 28px Georgia'; // размер и шрифт и стиль
context.fillStyle = 'fuchsia'; // цвет
context.strokeText('I can draw text, too!', 10, 250); // текст с обводкой в позиции 10 250
context.textAlign = 'center'; // start end center
context.fillText('I can draw text, too!', 300, 220); // просто текст в позиции 10 200
context.textBaseline = 'top'; // top middle bottom
context.fillText('I can draw text, too!', 300, 300); // просто текст в позиции 10 200
