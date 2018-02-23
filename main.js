const priceTags = document.querySelectorAll('#priceTag');
const btnWoman = document.querySelector('.forWoman');
const btnHousehold = document.querySelector('.forHousehold');
const sectionForWoman = document.querySelector('.sectionForWoman');
const sectionForHousehold = document.querySelector('.sectionForHousehold');
const header = document.querySelector('.header-text');

btnWoman.addEventListener('click', () => {
  sectionForWoman.style.display = 'block';
  sectionForHousehold.style.display = 'none';
  header.innerHTML = 'Что подарить любимой даме';
});
btnHousehold.addEventListener('click', () => {
  sectionForWoman.style.display = 'none';
  sectionForHousehold.style.display = 'block';
  header.innerHTML = 'Удобную чистоту в каждый дом';
});

const ua = 26;
const byn = 2;
const sale = 0.85;
if (sale < 1) document.querySelector('#disclaimer').innerHTML = `Цены указаны акционные (-${Math.round((1 - sale)* 100)}%). Время действия ограничено.`

class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
}

const productList = [
  new Product('G&H крем', 436.49),
  new Product('Демакияж', 547.02),
  new Product('Очищающий скраб', 658.13),
  new Product('Объемная тушь', 786.35),
  new Product('Карандаш для губ', 549.86),
  new Product('G&H гель и молочко', 671.36),
  new Product('Шампунь + бальзам', 611.83),
  new Product('Маска для волос', 634.14),
  new Product('FLORA CHIC', 1554.71),
  new Product('Парфюмы', 950),

  new Product('Гель для духовки', 200.73),
  new Product('LOC универсальный', 194.69),
  new Product('Dish Drops', 223,96),
];

for (let i = 0; i < priceTags.length; i++) {
  priceTags[i].innerHTML =
    `Стоимость: ${(sale < 1) ? '<span style="text-decoration: line-through">' + Math.floor(productList[i].price * 1.2 / ua * byn) + ' руб.</span>' : ''}
      ${Math.floor(productList[i].price * 1.2 / ua * byn * sale)} руб.`;
}

const demoVideoBtns = document.querySelectorAll('.btn-demoVideo');

demoVideoBtns[0].addEventListener('click', () => {window.open('https://www.youtube.com/watch?v=qWnfd6kBzTI', '_blank')}); // 0014
demoVideoBtns[1].addEventListener('click', () => {window.open('https://www.youtube.com/watch?v=Ek2t9rtHFT4', '_blank')}); // 0001
demoVideoBtns[2].addEventListener('click', () => {window.open('https://www.youtube.com/watch?v=bvDPjUTnk3E', '_blank')}); // Dish Drops
