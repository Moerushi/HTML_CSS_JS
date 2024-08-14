document.body.insertAdjacentHTML('afterbegin', `
    <input type="text," id="item-input" placeholder="Введите пункт">
    <button id="add-button">Добавить</button>
    <ul id="item-list"></ul>
    `);

let shoppingList = JSON.parse(localStorage.getItem('shoppinglist')) || [];

const updateShoppingList = () => {
    let itemList = document.getElementById('item-list');
    itemList.innerHTML = '';

    shoppingList.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = item;
        itemList.append(listItem);
    });

    localStorage.setItem('shoppinglist', JSON.stringify(shoppingList));
};

document.getElementById('add-button').addEventListener('click', () => {
    const newItem = document.getElementById('item-input').value.trim();
    if (newItem !== ''){
        shoppingList.push(newItem);
        document.getElementById('item-input').value = '';
        updateShoppingList();
    }
});

updateShoppingList();