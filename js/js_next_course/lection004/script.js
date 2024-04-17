const form = document.querySelector('.form');
const list = document.querySelector('ul');

list.addEventListener('click', (e) => {
  console.log('В первом UL в фазе захвата');
  const propagationControlMethodName = form.elements['propagation-control'].value;
  if (propagationControlMethodName) { // если элемент существуует
    e[propagationControlMethodName]();
  }
}, true);

list.addEventListener('click', () => {
  console.log('Во втором UL в фазе захвата');
}, true);

list.addEventListener('click', () => {
  console.log('В первом UL в фазе всплытия');
});

Array.from(list.children).forEach((child) => {
  child.addEventListener('click', () => {
    console.log('В каждом LI в фазе всплытия');
  })
})

const formElem = document.querySelector('.formTwo');
const inputElem = document.querySelector('.check');
const errorElem = formElem.querySelector('.error');
inputElem.addEventListener('click', function (e) {
  const target = e.target;
  console.log(target.checked);
});

formElem.addEventListener('submit', function (e) {
  if (inputElem.checked) {
    console.log('Go!');
  } else {
    errorElem.innerHTML = 'It is required to argree with conditions!';
    e.preventDefault();
  }
});

const eventOptions = {bubbles: true, cancelable: true};
const event = new Event('click', eventOptions);
event.view = window;
const mouseEvent = new MouseEvent('click', { ...eventOptions,view: window});
document.addEventListener('click', (event) => { console.log(event.isTrusted)});
const buttonEl = document.querySelector('.thirdBtn');
buttonEl.dispatchEvent(event);
buttonEl.dispatchEvent(mouseEvent);
buttonEl.click();