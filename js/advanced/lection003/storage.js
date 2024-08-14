localStorage.setItem('nickname', 'moerushi');
localStorage.setItem('age', 13);
console.log(localStorage.getItem('age')); // 13
console.log(localStorage.key(1)); // age
console.log(localStorage.length); // 2
localStorage.removeItem('age');
console.log(localStorage.getItem('nickname')); // moerushi
console.log(localStorage.key(0)); // nicknamev
console.log(localStorage.length); // 1
localStorage.clear();

if (localStorage.getItem('counter')) {
    let counter = parseInt(localStorage.getItem('counter')) + 1;
    localStorage.setItem('counter', counter.toString());
} else {
    localStorage.setItem('counter', 1)
}
localStorage.clear();