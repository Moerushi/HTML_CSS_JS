// Создать поле ввода (пароль)
// Кнопка отправить
// Если пользователь вводит текст “пароль” то поле ввода должно быть подсвечено зеленым цветом
// Если пароль неверный, у поля ввода появляется красная обводка и текст “пароль неверный”

const formElemTask3 = document.querySelector('.task3');

const pass = 'test123';
const pwdInput = document.createElement('input');
pwdInput.type = 'password';
formElemTask3.appendChild(pwdInput);

const task3Btn = document.createElement('button');
task3Btn.innerHTML = 'Отправить!';
// task3Btn.type = "submit";
formElemTask3.appendChild(task3Btn);

task3Btn.addEventListener('click', () => {
if(String(pwdInput.value) === pass){
  pwdInput.classList.add('border-green');
  pwdInput.classList.remove('border-red');

} else {
  pwdInput.classList.add('border-red');
  pwdInput.classList.remove('border-green');

}
});