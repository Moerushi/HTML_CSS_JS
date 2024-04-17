// В html создать 2 элемента радио кнопки (input type=”radio”) и текст “Чай”, “Кофе” соответственно
// Кнопка отправить
// Если выбран чай, необходимо вывести сообщение “Чай закончился”
// Если выбран кофе, необходимо вывести соообщение “кофе закончился”

const formElemTask2 = document.querySelector('.task2');

const beverages = { 'tea': 'Чай', 'coffee': 'Кофе' , 'jin':'Джин', 'juice':'Сок'};

for (const item in beverages) {
  const label = document.createElement('label');
  label.innerHTML = beverages[item];
  const option = document.createElement('input');
  option.type = 'radio';
  option.name = 'beverage';
  option.id = item;
  option.value = item;
  formElemTask2.appendChild(label);
  label.prepend(option);
}

const task2Btn = document.createElement('button');
task2Btn.innerHTML = 'Отправить!';
task2Btn.type = "submit";
formElemTask2.appendChild(task2Btn);

formElemTask2.addEventListener('submit', () => {
	for (let radio of formElemTask2.elements['beverage']) {
		if (radio.checked) {
			alert(`${beverages[radio.value]} закончился!`);
    } 
	}
});