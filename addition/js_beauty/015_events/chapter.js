// 1
// window.addEventListener('keydown', (e) => {
//     switch (e.key) {
//         case '1':
//             document.body.style.background = 'lightgreen';
//             break;
//         case '2':
//             document.body.style.background = 'lightblue';
//             break;
//         default:
//             document.body.style.background = 'transparent';
//             break;
//     }
//     console.log(e.key);
// });

// 2
// window.addEventListener('click', (e) => {
//     let dot = document.createElement('div');
//     dot.classList.add('dot');
//     dot.style.left = (e.pageX - 4) + 'px';
//     dot.style.top = (e.pageY - 4) + 'px';
//     // console.log(e.pageX);
//     // console.log(e.pageY);
//     document.body.appendChild(dot);
// });

// 3
// let lastX;
// let lastY;
// let bar = document.querySelector('div');

// bar.addEventListener('mousedown', event => {
//     if (event.button == 0) {
//         lastX = event.clientX;
//         lastY = event.clientY;
//         window.addEventListener('mousemove', moved);
//         event.preventDefault(); // заблокировать возможность выделения
//     }
// });

// function moved(event) {
//     if (event.buttons == 0) { // 1 левая 2 правая 4 средняя 0 ни одна
//         window.removeEventListener('mousemove', moved);
//     } else {
//         let distX = event.clientX - lastX;
//         let newWidth = Math.max(10, bar.offsetWidth + distX);
//         bar.style.width = newWidth + 'px';
//         lastX = event.clientX;

//         let distY = event.clientY - lastY;
//         let newHeight = Math.max(10, bar.offsetHeight + distY);
//         bar.style.height = newHeight + 'px';
//         lastY = event.clientY;
//     }
// }

// touchstart - когда палец прикасается к экрану
// touchmove - когда палец перемещается по экрану
// touchend - когда палец отрывается от экрана

// 4 - полоса прогресса в окне
// document.body.appendChild(document.createTextNode('jlsjdl aslkdj lasjd lkasjdl jaslkdj lasjdlkajs'.repeat(1000)));

// let bar2 = document.querySelector('#progress');
// window.addEventListener('scroll', () => {
//     let max = document.body.scrollHeight - innerHeight;
//     bar2.style.width = `${(scrollY / max) * 100}%`;
// });

// 5 - фокус
let help = document.querySelector('#help');
let fields = document.querySelectorAll('input');
for (let field of Array.from(fields)) {
field.addEventListener('focus', e => {
    let text = e.target.getAttribute('data-help');
    help.textContent = text;
});
field.addEventListener('blur', e => {
    help.textContent = '';
})
};

// 6 - загрузка
// load - при загрузке данных на странице
// beforeunload - срабатывает при закрытии или переходе на другую страницу

// 7 - web  обработчики, нужны для одновременного выполнения с основным сценарием, но по своей временной шкале
// const myWorker = new Worker('./myWorker.js');
// myWorker.addEventListener('message', event => {
//     console.log('Ответ от веб-обработчика: ', event.data);
// })

// myWorker.postMessage(10);
// myWorker.postMessage(24);

// 8 timers
// clearTimeout
let bombTimer = setTimeout(() => {
    console.log('Booooom!!!');
}, 500);

if (Math.random() < 0.5) {
    console.log('Ooops!');
    clearTimeout(bombTimer);
}

// cancelAnimationFrame
// clearInterval
let ticks = 1;
let clock = setInterval(() => { // повторяет каждые ... мс
    console.log('tick', ticks++);
    if(ticks > 10){
        clearInterval(clock);
        console.log('Stop!');
    }
}, 200);