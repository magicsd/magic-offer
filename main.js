const priceTags = document.querySelectorAll('#priceTag');
const btnWoman = document.querySelector('.forWoman');
const btnHousehold = document.querySelector('.forHousehold');
const sectionForWoman = document.querySelector('.sectionForWoman');
const sectionForHousehold = document.querySelector('.sectionForHousehold');
const header = document.querySelector('.header-text');
const saleForWomen = true;
const saleForHousehold = false;

header.innerHTML = 'Нажми на кнопочку выше &uarr;';

btnWoman.addEventListener('click', () => {
  sectionForWoman.style.display = 'block';
  sectionForHousehold.style.display = 'none';
  header.innerHTML = 'Что подарить любимой даме';
  showSale(saleForWomen);
});
btnHousehold.addEventListener('click', () => {
  sectionForWoman.style.display = 'none';
  sectionForHousehold.style.display = 'block';
  header.innerHTML = 'Удобную чистоту в каждый дом';
  showSale(saleForHousehold);
});

const ua = 26;
const byn = 2;
const sale = 0.85;

function showSale(isSale) {
  const saleTitle = document.querySelector('.showSale');
  (isSale && sale < 1) ? saleTitle.innerHTML = `Цены указаны акционные
    (-${Math.round((1 - sale)* 100)}%).
    Время действия ограничено.` : saleTitle.innerHTML = '';
}

class Product {
  constructor(name, price, sale) {
    this.name = name;
    this.price = price;
    this.sale = sale;
  }
}

const productList = [
  new Product('G&H крем', 436.49, saleForWomen),
  new Product('Демакияж', 547.02, saleForWomen),
  new Product('Очищающий скраб', 658.13, saleForWomen),
  new Product('Объемная тушь', 786.35, saleForWomen),
  new Product('Карандаш для губ', 549.86, saleForWomen),
  new Product('G&H гель и молочко', 671.36, saleForWomen),
  new Product('Шампунь + бальзам', 611.83, saleForWomen),
  new Product('Маска для волос', 634.14, saleForWomen),
  new Product('FLORA CHIC', 1554.71, saleForWomen),
  new Product('Парфюмы', 950, saleForWomen),

  new Product('Гель для духовки', 200.73, saleForHousehold),
  new Product('LOC универсальный', 194.69, saleForHousehold),
  new Product('Dish Drops', 223.96, saleForHousehold),
];

for (let i = 0; i < priceTags.length; i++) {
  priceTags[i].innerHTML =
    `${(sale < 1 && productList[i].sale) ? 'Стоимость: <span style="text-decoration: line-through">'
      + Math.floor(productList[i].price * 1.2 / ua * byn) + ' руб.</span> ' + Math.floor(productList[i].price * 1.2 / ua * byn * sale) + ' руб.'
       : Math.floor(productList[i].price * 1.2 / ua * byn) + ' руб.'}`;
}

const demoVideoBtns = document.querySelectorAll('.btn-demoVideo');

demoVideoBtns[0].addEventListener('click', () => {window.open('https://www.youtube.com/watch?v=qWnfd6kBzTI', '_blank')}); // 0014
demoVideoBtns[1].addEventListener('click', () => {window.open('https://www.youtube.com/watch?v=Ek2t9rtHFT4', '_blank')}); // 0001
demoVideoBtns[2].addEventListener('click', () => {window.open('https://www.youtube.com/watch?v=bvDPjUTnk3E', '_blank')}); // Dish Drops
