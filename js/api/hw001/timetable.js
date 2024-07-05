// Необходимо создать веб-страницу с динамическими элементами с расписанием занятий.

// Начальные данные (JSON):
const timetableBd = `[
    {
        "id": 1,
        "name": "Йога",
        "time": "10:00 - 11:00",
        "maxParticipants": 15,
        "currentParticipants": 8
    },
    {
        "id": 2,
        "name": "Пилатес",
        "time": "11:30 - 12:30",
        "maxParticipants": 10,
        "currentParticipants": 5
    },
    {
        "id": 3,
        "name": "Кроссфит",
        "time": "13:00 - 14:00",
        "maxParticipants": 20,
        "currentParticipants": 15
    },
    {
        "id": 4,
        "name": "Танцы",
        "time": "14:30 - 15:30",
        "maxParticipants": 12,
        "currentParticipants": 10
    },
    {
        "id": 5,
        "name": "Бокс",
        "time": "16:00 - 17:00",
        "maxParticipants": 8,
        "currentParticipants": 6
    }
]`;

const storageName = 'localTimetable';

if (!localStorage.getItem(storageName)) {
    localStorage.setItem(storageName, timetableBd);
}

const lessons = JSON.parse(localStorage.getItem(storageName));
console.log(lessons);

const containerEl = document.querySelector('.container');

containerEl.innerHTML = lessons.map((lesson) => createArticleHtml(lesson)).join('');

// Каждая строка таблицы должна содержать информацию о занятии, а именно:
// - название занятия
// - время проведения занятия
// - максимальное количество участников
// - текущее количество участников
// - кнопка "записаться"
// - кнопка "отменить запись"

function createArticleHtml(lesson) {
    return `<div class="lesson" data-id="${lesson.id}">
    <h1 class="lesson-name">${lesson.name}</h1>
    <p class="lesson-time">Время: ${lesson.time}</p>
    <p class="max-person">Кол-во участников: ${lesson.maxParticipants}</p>
    <p class="current-person-num">Записано: ${lesson.currentParticipants}</p>
    <button class="register-button">Записаться</button>
    <button class="cancel-registration">Отменить запись</button>
</div>`
}
  
// Если максимальное количество участников достигнуто, либо пользователь уже записан на занятие, сделайте кнопку "записаться" неактивной.

document.querySelectorAll('.register-button').forEach(btn => {
    btn.addEventListener('click', () => {  
        
        const index = lessons.findIndex((lesson) => lesson.id === +btn.closest('.lesson').getAttribute("data-id"));

        if(lessons[index].currentParticipants === lessons[index].maxParticipants) {
            btn.disabled = true;
            return;
        }
        
        lessons[index].currentParticipants++;
        btn.closest('.lesson').querySelector('.current-person-num').innerHTML = `Записано: ${lessons[index].currentParticipants}`;

        localStorage.setItem(storageName, JSON.stringify(lessons));
    });
});

// Кнопка "отменить запись" активна в случае, если пользователь записан на занятие, иначе она должна быть неактивна.

document.querySelectorAll('.cancel-registration').forEach(btn => {
    btn.addEventListener('click', () => {  
        
        const index = lessons.findIndex((lesson) => lesson.id === +btn.closest('.lesson').getAttribute("data-id"));

        if(lessons[index].currentParticipants === 0) {
            btn.disabled = true;
            return;
        }
        
        lessons[index].currentParticipants--;
        btn.closest('.lesson').querySelector('.current-person-num').innerHTML = `Записано: ${lessons[index].currentParticipants}`;

        localStorage.setItem(storageName, JSON.stringify(lessons));
    });
});

// Пользователь может записаться на один курс только один раз.

// При нажатии на кнопку "записаться" увеличьте количество записанных участников.
// Если пользователь нажимает "отменить запись", уменьшите количество записанных участников.
// Обновляйте состояние кнопок и количество участников в реальном времени.

// Если количество участников уже максимально, то пользователь не может записаться, даже если он не записывался ранее.

// Сохраняйте данные в LocalStorage, чтобы они сохранялись и отображались при перезагрузке страницы.