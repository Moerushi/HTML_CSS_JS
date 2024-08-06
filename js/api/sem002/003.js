const buttonEl = document.querySelector('.buy-button');

buttonEl.addEventListener('click', (event) => {
    if (event.isTrusted) {
        event.target.innerHTML = 'Goods added'
        event.target.disabled = true;
        setTimeout(() => {
            event.target.innerHTML = 'Buy'
        event.target.disabled = false;

        }, 3000);
    }
});

