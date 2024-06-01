const getDataTwo = async (argUrl) => {
    try {
        const resp = await fetch(argUrl);
        const data = await resp.json();
        return data;
    } catch (error) {
        console.log(error);
    }
};

const fetchData = await getDataTwo(nasaUrl);
console.log(fetchData);

const catalogEl = document.querySelector('div.catalog');
fetchData.forEach(element => {
    catalogEl.insertAdjacentHTML('beforeend', `
    <figure>
    <img src="${element.url}" alt="${element.url}">
    <figcaption>${element.explanation}</figcaption>
    </figure>   
    `);
});