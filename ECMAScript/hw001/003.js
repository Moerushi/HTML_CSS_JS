// Напишите рекурсивную функцию findElementByClass, которая принимает корневой элемент дерева DOM и название класса в качестве аргументов и возвращает первый найденный элемент с указанным классом в этом дереве.

// **Пример**
// const rootElement = document.getElementById('root');
// const targetElement = findElementByClass(rootElement, 'my-class');
// console.log(targetElement);

function findElementByClass(rootEl, className) {

  if (rootEl.classList.contains(className)) return rootEl;

  for (let i = 0; i < rootEl.children.length; i++) {
    const childEl = rootEl.children[i];
    const foundEl = findElementByClass(childEl, className);
    if (foundEl) return foundEl;
  }
 return null;
};

const rootElement = document.getElementById('root');
const targetElement = findElementByClass(rootElement, 'this__class');
console.log(targetElement);

