const height = window.innerHeight; // высота браузера с прокруткой
const width = window.innerWidth; // высота браузера с прокруткой

const main = document.body;

main.innerHTML = `Ширина окна браузера: ${width}, высота окна браузера ${height}`;

window.addEventListener('resize', () => {
    main.innerHTML = `Ширина окна браузера: ${window.innerWidth}, высота окна браузера ${window.innerHeight}`;
});

console.log(document.documentElement.clientHeight); // высота рабочей области браузера
console.log(document.documentElement.clientWidth); // высота рабочей области браузера