const buttonEl = document.querySelector('.open-modal-button');
const windowEl = document.querySelector('.modal-window');

const closeModal = (e) => {
    if (!windowEl.contains(e.target) && e.target !== buttonEl) {
        windowEl.style.display = 'none';
        document.removeEventListener('mousedown', closeModal);
    }

}

buttonEl.addEventListener('click', (e) => {
    windowEl.style.display = 'block';
});

document.addEventListener('mousedown', closeModal);

