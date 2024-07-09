// фильтрация по атрибуту

const filterElementByDateAttribute = (attributeName, maxPrice) => {
    const elements = Array.from(document.querySelectorAll(`[${attributeName}]`));
    elements.forEach(element => {
        const price = parseFloat(element.getAttribute(attributeName));
        if (price > maxPrice) {
            element.style.display = 'none';
        }
    });
};

filterElementByDateAttribute('data-price', 75);

// сортировка по атрибуту

const sortElementByDataAttribute = attributeName => {
    const rating = document.querySelector('.rating');
    const elements = Array.from(rating.querySelectorAll(`[${attributeName}]`));
    elements.sort((a, b) => {
        const ratingA = parseInt(a.getAttribute(attributeName));
        const ratingB = parseInt(b.getAttribute(attributeName));
        return ratingB - ratingA;
    });
    elements.forEach(element => {
        rating.appendChild(element);
    });
};

sortElementByDataAttribute('data-rating');