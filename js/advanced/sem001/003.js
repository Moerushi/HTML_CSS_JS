const divEl = Array.from(document.querySelectorAll('div')).filter(el => el.getAttribute('data-active'));
console.log(divEl);