const data = JSON.parse(prodDataSet);

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
  clone.querySelector('p.products__card-price').innerHTML = element.currency + ' ' + element.price + '.00';

  prodContainer.appendChild(clone);
});