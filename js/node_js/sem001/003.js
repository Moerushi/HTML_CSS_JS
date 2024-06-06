function counter(n) {
    console.log(n);
    setTimeout(() => counter(n + 1), 0);
    // counter(n + 1);

}

counter(0);

setTimeout(() => {
    console.log("Скрипт успешно завершен!");
    process.exit();
}, 1000);

// как уйти от вызова себя самой
// нужно перенести не в стек, а в сторонку, т.е. закинуть в event loop