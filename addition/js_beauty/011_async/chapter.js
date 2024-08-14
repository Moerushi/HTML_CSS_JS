setTimeout(() => console.log('tick5'), 5000);

// promise асинхронное действие, которое может завершиться в какой то момент времени и произвести значение и уведомить, что какое-то действие доступно

let fifteen = Promise.resolve(15); // 15 это результат
// Promise создает значение, которое может уже существовать
console.log(fifteen); // возвращает　resulе и status
fifteen.then(value => console.log(value)); // возвращает просто значение 15 через функцию обратного вызова then, когда промис разрешится и создаст значение

// Promise.reject
// .catch

new Promise((_, reject) => reject(new Error('Something goes wrong')))
    .then(value => console.log('Processor!')) // если все ок
    .catch(reason => {
        console.log('Error found!'); // если получена ошибка
        return 'Nothing'; // возвращает Nothing и пережает это значение дальше по конвейеру
    })
    .then(value => console.log('Processor2', value)); // при успешном получении и обработке выдает вызов дальше

// стр 226 про вопторные запросы и попытки получить данные

// async await

// функции генераторы, у которой есть способность приостанавливаться и затем возобновлять работу без промисов
function* powers(n) {
    for (let current = n; ; current *= n) {
        if (current > 10) {
            return current;
        } else {
            yield current; // приостанаваливает функцию и делает полученное значение следующим значением, создающим итератор. Когда ффункция возвращает результа, итератор завершается.
        }
    }
}

let ex = powers(2);

console.log(ex.next()); // вернет 2, первое значение
console.log(ex.next()); // вернет 4, второе значение
console.log(ex.next()); // вернет 8, третье значение
console.log(ex.next()); // вернет 16, четвертое значение и выполение завершится
console.log(ex.next()); // не даст результата, так как выполнение фукнции завершено



// for (let power of powers(4)) {
//     if (power > 50) break;
//     console.log(power);
// }