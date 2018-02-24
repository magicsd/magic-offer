const priceTags = document.querySelectorAll('.priceTag');
const btnWoman = document.querySelector('.forWoman');
const btnMen = document.querySelector('.forMen');
const btnHousehold = document.querySelector('.forHousehold');
const btnGlister = document.querySelector('.glister');
const btnNutrilite = document.querySelector('.nutrilite');
const sectionForWoman = document.querySelector('.sectionForWoman');
const sectionForHousehold = document.querySelector('.sectionForHousehold');
const sectionGlister = document.querySelector('.sectionGlister');
const header = document.querySelector('.header-text');

header.innerHTML = 'Для кого подарочек? &uarr;';

btnWoman.addEventListener('click', openForWomen);
btnHousehold.addEventListener('click', openForHousehold);
btnGlister.addEventListener('click', openGlister);

const ua = 26;
const byn = 2;
const saleForWomen = [true, 0.8];
const saleForHousehold = [true, 0.9];
const saleGlister = [true, 0.9];

class Product {
  constructor(id, section, name, price, video = '') {
    this.id = id;
    this.section = section;
    this.name = name;
    this.price = Math.floor(price * 1.2 / ua * byn);
    this.video = video;
    switch (section) {
      case 'forWoman':
        this.sale = saleForWomen;
        break;
      case 'forHousehold':
        this.sale = saleForHousehold;
        break;
      case 'Glister':
        this.sale = saleGlister;
        break;
      default:
        this.sale = 'noSection';
    };
  }

  setPriceTag() {
    const priceTag = document.querySelector(`#item-${this.id} .priceTag`);
    priceTag.innerHTML = `${this.sale[0] ? 'Стоимость: <span style="text-decoration: line-through">'
      + this.price + ' руб.</span> ' + Math.floor(this.price * this.sale[1]) + ' руб.'
       : this.price + ' руб.'}`;
  }

  setVideoLink() {
    if (this.video != '') document.querySelector(`#item-${this.id} .videoBox`).style.display = 'block';
    const demoVideoBtn = document.querySelector(`#item-${this.id} .btn-demoVideo`);
    if (demoVideoBtn) demoVideoBtn.addEventListener('click', () => window.open(this.video, '_blank'));
  }
}

const productList = [
  new Product(0, 'forWoman', 'G&H крем', 436.49),
  new Product(1, 'forWoman', 'Демакияж', 547.02),
  new Product(2, 'forWoman', 'Очищающий скраб', 658.13),
  new Product(3, 'forWoman', 'Объемная тушь', 786.35),
  new Product(4, 'forWoman', 'Карандаш для губ', 549.86),
  new Product(5, 'forWoman', 'G&H гель и молочко', 671.36),
  new Product(6, 'forWoman', 'Шампунь + бальзам', 611.83),
  new Product(7, 'forWoman', 'Маска для волос', 634.14),
  new Product(8, 'forWoman', 'FLORA CHIC', 1554.71),
  new Product(9, 'forWoman', 'Парфюмы', 950),
  new Product(10, 'forHousehold', 'Гель для духовки', 200.73, 'https://www.youtube.com/watch?v=qWnfd6kBzTI'),
  new Product(11, 'forHousehold', 'LOC универсальный', 194.69, 'https://www.youtube.com/watch?v=Ek2t9rtHFT4'),
  new Product(12, 'forHousehold', 'Dish Drops', 223.96, 'https://www.youtube.com/watch?v=bvDPjUTnk3E'),
  new Product(13, 'forHousehold', 'Металлические губки', 157.53),
  new Product(14, 'forHousehold', 'SA8 Premium', 321.39),
  new Product(15, 'forHousehold', 'SA8 Prewash', 245.87),
  new Product(16, 'forHousehold', 'SA8 Отбеливатель 0.5', 217.32),
  new Product(17, 'Glister', 'Зубная паста', 154.6),
];

for (let i = 0; i < productList.length; i++) {
  productList[i].setPriceTag();
  productList[i].setVideoLink();
}

// const demoVideoBtns = document.querySelectorAll('.btn-demoVideo');
//
// for (let i = 0; i < demoVideoBtns.length; i++)
// demoVideoBtns[i].addEventListener('click', () => {window.open(productList[10+i].video, '_blank')});

function openForWomen() {
  sectionForWoman.style.display = 'block';
  sectionForHousehold.style.display = 'none';
  header.innerHTML = 'Что подарить любимой даме';
  showSale(saleForWomen);
  this.setAttribute('style', 'box-shadow: 0 0.5rem 1rem rgba(250, 178, 100, 0.6);');
  btnHousehold.removeAttribute('style');
  btnGlister.removeAttribute('style');
}

function openForHousehold() {
  sectionForWoman.style.display = 'none';
  sectionForHousehold.style.display = 'block';
  header.innerHTML = 'Удобную чистоту в каждый дом';
  showSale(saleForHousehold);
  this.setAttribute('style', 'box-shadow: 0 0.5rem 1rem rgba(250, 178, 100, 0.6);');
  btnWoman.removeAttribute('style');
  btnGlister.removeAttribute('style');
}

function openGlister() {
  sectionForWoman.style.display = 'none';
  sectionForHousehold.style.display = 'none';
  sectionGlister.style.display = 'block';
  header.innerHTML = 'Чтобы были здоровы зубы';
  showSale(saleGlister);
  this.setAttribute('style', 'box-shadow: 0 0.5rem 1rem rgba(250, 178, 100, 0.6);');
  btnWoman.removeAttribute('style');
  btnHousehold.removeAttribute('style');
}

function showSale(sale) {
  const saleTitle = document.querySelector('.showSale');
  sale[0] ? saleTitle.innerHTML = `Цены указаны акционные
    (-${Math.round((1 - sale[1])* 100)}%).
    Время действия ограничено.` : saleTitle.innerHTML = '';
}
