const productsData = [
  {
    src: 'img1.png',
    alt: 'object data 1',
    name: 'Название 1',
    desc: 'Описание товара 1',
    href: 'product1.html',
    price: 12000
  },
  {
    src: 'img2.png',
    alt: 'object data 2',
    name: 'Название 2',
    desc: 'Описание товара 2',
    href: 'product2.html',
    price: 22000
  },
  {
    src: 'img3.png',
    alt: 'object data 3',
    name: 'Название 3',
    desc: 'Описание товара 3',
    href: 'product3.html',
    price: 32000
  }
];

const productBox = document.querySelector('.product-box');

productsData.forEach(productdata => {
  const productEl = document.createElement('div');
productEl.classList.add('product');

const productImg = document.createElement('img');
productImg.classList.add('product__image');
productImg.src = productdata.src;
productImg.alt = productdata.alt;

const productContent = document.createElement('div');
productContent.classList.add('product__content');

const productName = document.createElement('a');
productName.classList.add('product__name');
productName.href = productdata.href;
productName.innerHTML = productdata.name;

const contentDesc = document.createElement('p');
contentDesc.classList.add('prodect__text');
contentDesc.innerHTML = productdata.desc;

const contentPrice = document.createElement('p');
contentPrice.classList.add('product__price');
contentPrice.innerHTML = productdata.price;

productBox.appendChild(productEl);
productEl.appendChild(productImg);
productEl.appendChild(productContent);
productContent.appendChild(productName);
productContent.appendChild(contentDesc);
productContent.appendChild(contentPrice);

});