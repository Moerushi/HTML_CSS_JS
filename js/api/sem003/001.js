const productsData = [
    {
        id: 1,
        name: "Laptop",
        category: "Electronics"
    },
    {
        id: 2,
        name: "SmartPhone",
        category: "Electronics"
    },
    {
        id: 3,
        name: "Coffee maker",
        category: "Electronics"
    },
    {
        id: 4,
        name: "Camera",
        category: "Electronics"
    },
    {
        id: 5,
        name: "Microwave oven",
        category: "Electronics"
    },
    {
        id: 6,
        name: "Book",
        category: "Books"
    },
    {
        id: 7,
        name: "T-shirt",
        category: "Clothes"
    },
    {
        id: 8,
        name: "Hat",
        category: "Clothes"
    },
    {
        id: 9,
        name: "Chair",
        category: "Furniture"
    },
    {
        id: 10,
        name: "Table",
        category: "Furniture"
    },
];

const productsEl = document.querySelector('.products');
const categorySelectEl = document.querySelector('#categorySelect');
categorySelectEl.addEventListener("change", () => {
    const selectCategory = categorySelectEl.value;
    displayCatalogue(selectCategory);
});

function displayCatalogue(category) {
    let productsHTML = '';
    productsData.forEach((element) => {
        if (category === '' || element.category.toLowerCase() === category) {
            productsHTML += createCard(element);
        }
    });
    productsEl.innerHTML = productsHTML;
}

function createCard(cardInfo) {
    return `<div class="card">
        <h1 class="title">${cardInfo.name}</h1>
        <p class="category">${cardInfo.category}</p>
    </div>`;
}