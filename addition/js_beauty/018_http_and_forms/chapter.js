console.log(encodeURIComponent('nooooooo?'));
console.log(decodeURIComponent('nooooooo%3F'));


// GET /example/message.html?name=Jean&message=Yes%3F НТТР/1.1
// ? - начало запроса
// & - разделитель полей запроса

const form = document.querySelector('form');
console.log(form.elements.name.type);

let textarea = document.querySelector('.txar');
textarea.addEventListener('keydown', event => {
    if (event.keyCode == 113) {
        replaceSelection(textarea, 'Хасехемуи');
        event.preventDefault();
    }
});

function replaceSelection(field, word) {
    let from = field.selectionStart, to = field.selectionEnd;
    field.value = field.value.slice(0, from) + word + field.value.slice(to);
    field.selectionStart = from + word.length;
    field.selectionEnd = from + word.length;
}