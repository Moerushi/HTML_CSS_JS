// Повторить то, что было на семинаре, либо решить следущие задачи
// Дан макет сайта https://www.figma.com/file/mnLY69cYE5cqWM5w6n5hXx/Seo-%26-Digital-Marketing-Landing-Page?node-id=190%3A1194&t=q4NMnXTnwyyTSGA6-0

// В блоке Featured Items небходимо реализовать шаблон товаров.

// Для этого необходимо создать json формат данных по всем товарам.

// Из этого файла сформировать блок Featured Items.

// Всю вёрстку остальных частей реализовывать не нужно, если у вас она была сделана на html/css можно использовать, заново создавать не требуется.


const data = JSON.parse(dataSet);

const prodContainer = document.querySelector('div.products__box');

data.forEach(element => {
  const tempEl = document.getElementById('productCardTemplate');
  const clone = tempEl.content.cloneNode(true);
  clone.querySelector('div.products__card-imagebox-bg a').href = element.prodLink;
  clone.querySelector('.products_card_img').src = element.imgUrl;
  clone.querySelector('.products_card_img').alt = element.name + ' ' + element.category;
  clone.querySelector('a.products__card-title').href = element.prodLink;
  clone.querySelector('a.products__card-title').innerHTML = element.name + ' ' + element.category;
  clone.querySelector('p.products__card-description').innerHTML = element.description;
  clone.querySelector('p.products__card-price').innerHTML = element.currency + ' ' + element.price;

  prodContainer.appendChild(clone);
});