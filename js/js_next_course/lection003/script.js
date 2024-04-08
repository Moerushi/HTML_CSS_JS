// const buttonElements = document.querySelectorAll('.button');

// let count = 0;
// const click = function () {
//   console.log("click js button");
//     count++;
//   console.log(`${count} clicks`);
// }
// buttonElement.addEventListener('click', click);

// buttonElements.forEach(element => {
//   element.addEventListener('click', function (event) {
// const target = event.target;
//     console.log(target);
//   });
// });

// const menuEl = document.querySelector('.menu');
// const nameFunction = (e) => console.log(e.target, e.currentTarget, e.currentTarget);
// menuEl.addEventListener('click',nameFunction);

// document.addEventListener('DOMContentLoaded', (e) => console.log('loaded'));
// window.addEventListener('load', (e) => console.log('все загрузилось'));

// const buttElem = document.querySelector('.button');
// buttElem.addEventListener('mouseover', (e) => console.log('Not get over, it is better to press'))
// buttElem.addEventListener('mouseleave', (e) => console.log('Not get over, it is better to press'))

// window.addEventListener('keydown',(e) => console.log(e.key));
// window.addEventListener('keyup',(e) => console.log(e.key));
// window.addEventListener('keypress',(e) => console.log(e.key));

// const link = document.querySelector('.link');
// link.addEventListener('click',(e) => {
// e.preventDefault(); // остановка перехода, отработку формы и так далее
// console.log('hello link');
// });

// document.addEventListener('copy', (e) => {
// const copyText = document.getSelection().toString();
// console.log(copyText);
// });

// window.addEventListener('resize', (e) => console.log(e.target.innerWidth))

// const inputElem = document.querySelector('input')
// inputElem.addEventListener('input', (e) => {
//   if(Number(e.target.value) === 123) {
//     console.log("Correct")
//   } else {
//     console.log("Wrong")
//   }
// });

// const inputText = document.querySelector('input');
// const formElem = document.querySelector('form');
// const errorElem = document.querySelector('.error');

// formElem.addEventListener('submit', (e) => {
//   if (inputText.value === '') {
//     e.preventDefault();
//     errorElem.textContent = 'Поле не должно быть пустым';
//   }
// });