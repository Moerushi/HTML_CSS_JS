const questionEls = document.querySelectorAll('.question');
const submitButtonEl = document.querySelector('#submit');
const resultEl = document.querySelector('.result');
const resultListEl = document.querySelector('.result-list');

submitButtonEl.addEventListener('click', (e) => {
    const answers = [];
    questionEls.forEach(questionEl => {
        const answerEl = questionEl.querySelector('input:checked');
        if (answerEl) {
            answers.push(answerEl.value);
            questionEl.classList.remove('red-border');
        } else {
            questionEl.classList.add('red-border');
        }
    });

    if (answers.length === questionEls.length) {
        resultEl.style.display = 'block';
        resultListEl.innerHTML = answers.map((answer, index) => {
            return `<p id="result-q${index + 1}">Вопрос ${index + 1}: <span>${answer}</span></p>`
        }).join('');
    }
});
