// 3. "Изменение стиля элемента через заданное время"
// Напишите функцию changeStyleDelayed, которая принимает идентификатор элемента и время задержки (в миллисекундах) в качестве аргументов. Функция должна изменить стиль элемента через указанное время.

// Пример использования функции
 // Через 2 секунды изменяет стиль элемента с id 'myElement'

function changeStyleDelayed(elId, delay) {
    var element = document.getElementById(elId);
    if (element) {
        setTimeout(function () {
            element.style.backgroundColor = 'orange';
            element.style.width = '200px';
            element.style.height = '200px';

        }, delay);
    } else {
        console.error('Элемент не найден');
    }
}

changeStyleDelayed('expml', 2000);