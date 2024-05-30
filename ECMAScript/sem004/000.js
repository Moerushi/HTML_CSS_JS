//https://jsonplaceholder.typicode.com
const myPromise = new Promise((resolve, reject) => { });
myPromise.then((value) => { }).catch((error) => { console.log('ошибка') });

const url = 'https://jsonplaceholder.typicode.com/users';
fetch(url)
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.error("smt goes wrong")); // ответ от сервера и присваивание в response

// шаблон функции
const getData = (url) =>
    new Promise((resolve, reject) => {
        fetch(url)
            .then((response) => response.json())
            .then((data) => resolve(data))
            .catch((error) => reject(error))
    });

getData(url)
    .then((data) => console.log(data))
    .catch((error) => console.log(error.message));

const getDataTwo = async (argUrl) => { // асинхронная функция
    try {
        const resp = await fetch(argUrl); // ожидаем результат работы функции fetch(url)
        const data = await resp.json();
        return data;
    } catch (error) {
        console.log(error);
    }
};

const fetchData = await getDataTwo(url);
console.log(fetchData);