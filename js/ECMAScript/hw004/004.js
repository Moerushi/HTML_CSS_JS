// Задача 1:
// Необходимо получить список всех пользователей с помощью бесплатного API (https://jsonplaceholder.typicode.com/users) и отобразить их на странице. Пользователь должен иметь возможность удалить любого пользователя из списка.

const userUrl = 'https://jsonplaceholder.typicode.com/users';

const getData = async (url) => {
    try {
        const resp = await fetch(url);
        const data = await resp.json();
        return data;
    } catch (error) {
        console.log(error);
    }
};

const fetchData = await getData(userUrl);
console.log(fetchData);

const content = document.querySelector('div.content');
fetchData.forEach(element => {
    content.insertAdjacentHTML('beforeend', `
    <div class="card">
    <h1>${element.name}</h1>
    <h2>${element.username}</h2>
    <p>${element.email}</p> 
    <button class="del-button">Delete</button> 
    </div>
    `);
});

const delBtns = document.querySelectorAll('.del-button');
delBtns.forEach(element => {
element.addEventListener('click', (e) => 
    e.target.parentNode.remove())
});