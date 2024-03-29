/* 
1 Получите ссылку на первый абзац из дива с id,
равным block, выведите его в консоль
2 Получите ссылку на первый абзац с классом www.
и вывести его в консоль
<p class="www">text 1</p>
<p class="www">text 2</p> */
// const divEl = document.querySelector("div#block");
// console.log(divEl);
// console.log(document.querySelectorAll("div#block p.www")[0].innerHTML);
// console.log(divEl.querySelectorAll("p.www")[0].innerHTML);

const divElem = document.querySelector('#block');
console.log(divElem);
const pElem = document.querySelectorAll('#block > p:first-child');
console.log(pElem);