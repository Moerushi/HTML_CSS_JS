// 1
const firstNum = '1024';
const secondNum = parseInt(firstNum);
console.log(secondNum);

//2
const simpleButton = document.querySelector('.button_simple');
let firstDiv = document.querySelector('.first');
let simpleInput = document.querySelector('.input_simple');

simpleButton.classList.add('newclass'); // добавляет класс
simpleButton.classList.remove('newclass'); // удаляет класс

simpleButton.onclick = function() {
  simpleButton.classList.toggle('button_simple_new');  //переключает классы
  console.log(`Ваш текст: ${simpleInput.value}`);
  if (simpleButton.textContent === 'Not simple') {
    simpleButton.textContent = 'Simple'; // добавляет и изменяет содержимое в теге
  } else {
    simpleButton.textContent = 'Not simple'; // добавляет и изменяет содержимое в теге
  }  
}

//3
const myNum = 34;
console.log(`Квадратный коренчь числа ${myNum} равен ${Math.round(Math.sqrt(myNum)*100)/100}.`);
console.log(`Квадратный корень числа ${myNum} с округлением в меньшую сторону равен ${Math.floor(Math.sqrt(myNum))}.`);
console.log(`Квадратный коренчь числа ${myNum} с округлением равен ${Math.round(Math.sqrt(myNum))}.`);
console.log(`Квадратный коренчь числа ${myNum} с округлением в большую сторону равен ${Math.ceil(Math.sqrt(myNum))}.`);

//4
const checkClass = 'button';
if (simpleButton.classList.contains(checkClass)) { // проверяет элемент на содержание класса
console.log(`Элемент содержит класс ${checkClass}.`);
} else {
  console.log(`Элемент содержит класс ${checkClass}.`);
}

//5 создание элемента
let newElement = document.createElement('div');
let newParent = document.querySelector('.body');
newParent.append(newElement);
newElement.textContent = 'Созданный новый элемент';
newElement.classList.add('div_new');