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

const timetableStorageName = 'localTimetable';
if (!localStorage.getItem(timetableStorageName)) {
    localStorage.setItem(timetableStorageName, timetableBd);
}

const lessons = JSON.parse(localStorage.getItem(timetableStorageName));

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
    <button class="register-button"${lesson.maxParticipants <= lesson.currentParticipants || lesson.client.includes(navigator.userAgent) ? ' disabled' : ''}>Записаться</button>
    <button class="cancel-registration"${!lesson.client.includes(navigator.userAgent) || lesson.currentParticipants === 0 ? ' disabled' : ''}>Отменить запись</button>
</div>`
}



// Если максимальное количество участников достигнуто, либо пользователь уже записан на занятие, сделайте кнопку "записаться" неактивной.

document.querySelectorAll('.register-button').forEach(btn => {
    btn.addEventListener('click', () => {

        btn.closest('.lesson').querySelector('.cancel-registration').disabled = false;

        const index = lessons.findIndex((lesson) => lesson.id === +btn.closest('.lesson').getAttribute("data-id"));
        lessons[index].currentParticipants++;
        btn.closest('.lesson').querySelector('.current-person-num').innerHTML = `Записано: ${lessons[index].currentParticipants}`;

        if (!lessons[index].client) {
            lessons[index].client = [];
        }
        lessons[index].client.push(navigator.userAgent);

        localStorage.setItem(timetableStorageName, JSON.stringify(lessons));

        if (lessons[index].currentParticipants === lessons[index].maxParticipants || lessons[index].client.includes(navigator.userAgent)) {
            btn.disabled = true;
            return;
        };

    });
});

// Кнопка "отменить запись" активна в случае, если пользователь записан на занятие, иначе она должна быть неактивна.

document.querySelectorAll('.cancel-registration').forEach(btn => {
    btn.addEventListener('click', () => {

        const index = lessons.findIndex((lesson) => lesson.id === +btn.closest('.lesson').getAttribute("data-id"));
        lessons[index].currentParticipants--;
        lessons[index].client.splice(lessons[index].client.findIndex((el) => el.includes(navigator.userAgent)), 1);

        btn.closest('.lesson').querySelector('.current-person-num').innerHTML = `Записано: ${lessons[index].currentParticipants}`;
        btn.closest('.lesson').querySelector('.register-button').disabled = false;

        localStorage.setItem(timetableStorageName, JSON.stringify(lessons));

        if (lessons[index].currentParticipants === 0 || !lessons[index].client.includes(navigator.userAgent)) {
            btn.disabled = true;
            return;
        }
    });
});

// Пользователь может записаться на один курс только один раз.

// При нажатии на кнопку "записаться" увеличьте количество записанных участников.
// Если пользователь нажимает "отменить запись", уменьшите количество записанных участников.
// Обновляйте состояние кнопок и количество участников в реальном времени.

// Если количество участников уже максимально, то пользователь не может записаться, даже если он не записывался ранее.

// Сохраняйте данные в LocalStorage, чтобы они сохранялись и отображались при перезагрузке страницы.