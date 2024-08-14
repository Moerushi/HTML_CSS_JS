let generateRandomNumber = () => {
    return new Promise((resolve, reject) => {
        const randomNumber = Math.floor(Math.random() * 10) + 1;
        if (randomNumber) {
            resolve(randomNumber);
        } else {
            reject('Ошибка генерации случайного числа')
        }
    }, 10000);
};

generateRandomNumber()
    .then((number) => {
        console.log('Сгенерировано случайное число', number);
    })
    .catch((error) => {
        console.log('Ошибка', error);
    })

// ------

let fetchData = (url) => {
    return new Promise((resolve, reject) => {
        fetch(url)
            .then((response) => response.json())
            .then((data) => resolve(data))
            .catch((error) => reject('Ошибка загрузки данных'));
    })
};

fetchData('https://api.thecatapi.com/v1/images/search')
    .then((data) => {
        console.log('Получены данные: ', data);
    })
    .catch((error) => {
        console.log('Ошибка: ', error);
    })

// ------

let checkIfFileExist = (file) => {

}

let checkFileExist = (file) => {
    return new Promise((resolve, reject) => {
        const fileExist = checkIfFileExist(file);
        if (fileExist) {
            resolve('Файл существует');
        } else {
            reject('Файл не существует');
        }
    }, 2000);
}

checkFileExist('index.html')
    .then((message) => {
        console.log(message);
    })
    .catch((error) => {
        console.log('Ошибка: ', error);
    })

// ------


let calculateSum = (a, b) => {
    return new Promise((resolve, reject) => {
        const sum = a + b;
        resolve(sum);
    });
}

calculateSum(3, 7)
    .then((result) => {
        console.log('Сумма: ', result);
    })

// ------

let divideNumbers = (a, b) => {
    return new Promise((resolve, reject) => {
        if (b === 0) {
            reject('На 0 делить нельзя');
        } else {
            resolve(a / b);
        }
    });
}

divideNumbers(3, 0)
    .then((result) => {
        console.log('Резльутат деления: ', result);
    })
    .catch((error) => {
        console.log('Ошибка: ', error);
    })

// ------

new Promise(function (resolve, reject) {
    setTimeout(() => resolve(1), 1000);
}).then(function (result) {
    console.log(result);
    return new Promise((resolve) => {
        setTimeout(() => resolve(result * 2), 1000);
    });
}).then(function (result) {
    console.log(result);
    return new Promise((resolve) => {
        setTimeout(() => resolve(result * 2), 1000);
    });
}).then(function (result) {
    console.log(result);
})

// ------

let processData = (data) => {

}

let performOperator = (data) => {
    return new Promise((resolve, reject) => {

        let result = processData(data);

        if (result) {
            resolve(result);
        } else {
            reject('Ошибка операции');
        }
    }).finally(() => {
        console.log('Операция завершена!');
    });
}

performOperator('example')
    .then((result) => {
        console.log('Результат: ', result);
    })
    .catch((error) => {
        console.log('Ошибка: ', error);
    });

    Promise.all([
        new Promise((resolve,reject) => setTimeout(() => resolve(11), 1000)),
        new Promise((resolve,reject) => setTimeout(() => resolve(22), 2000)),
        new Promise((resolve,reject) => setTimeout(() => resolve(33), 3000))
    ])
    .then(console.log)
    .catch(console.log);

    let checkServerResponse = (urls) => {
        let promises = urls.map((url) => fetch(url));

        return Promise.race(promises) 
        .then ((response) => {
            return response.urls;
        });
    }

    let urls = [
        'https://api.thecatapi.com/v1/images/search',
        'https://api.thecatapi.com/v1/images/search',
        'https://api.example.com/server1'
    ];

    checkServerResponse(urls)
    .then((fastestServer) => {
        console.log('Самый быстрый сервер: ', fastestServer);
    })
    .catch((error) => {
        console.log('Ошибка: ', error);
    })