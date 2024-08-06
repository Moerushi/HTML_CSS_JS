// делигирование позволяет навешивать события при динамическом добавлении или удалении элементов, лучше его использовать, ближайший общий тег
const menuEl = document.querySelector('.menu');

menuEl.addEventListener('click', (e) => {
    if (!e.target.tagName.toLowerCase() === 'a') {
        return;
    }
    menuEl.querySelector('.active').classList.remove('active');
    e.target.classList.add('active');

});