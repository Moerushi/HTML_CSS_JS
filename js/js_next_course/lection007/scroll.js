// const elP = document.querySelector('p');
// console.log(document.documentElement.scrollHeight);
// console.log(document.documentElement.clientHeight);

// console.log(window.pageYOffset);
// console.log(document.documentElement.scrollHeight);

// document.addEventListener('scroll', e => {
//     console.log(document.documentElement.scrollTop);
// });

const contentEl = document.querySelector('.content');

document.addEventListener('scroll', (e) => {
    const height = document.documentElement.offsetHeight;
    console.log(`------- Высота документа: ${height}`);
    const screenHeight = document.documentElement.clientHeight;
    console.log(`Высота видимой области: ${screenHeight}`);
    const scrolled = window.scrollY;
    console.log(`Уже прокрутили: ${scrolled}`);
    
    const threshold = height - screenHeight / 4; // четверть страницы до конца экрана
    const position = scrolled - screenHeight;
    console.log(`Текущая позиция: ${position}`);
    if (position >= threshold){
        const pText = document.createElement('p');
        pText.textContent = '';
        contentEl.appendChild(pText);
    }
});

