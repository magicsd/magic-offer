$(() => {
  const priceTag = $('.pricetag');
  const sectionForWoman = $('.sectionForWoman');
  const sectionForHousehold = $('.sectionForHousehold');
  const sectionGlister = $('.sectionGlister');
  const header = $('.header-text');

  $(header).html('Для кого подарочек? &uarr;');
  $(document).scroll(() => {
    const toTop = $('.toTop')[0];
    (document.documentElement.scrollTop > document.documentElement.clientHeight) ? $(toTop).css('display', 'block') :
    $(toTop).css('display', 'none');
  $(toTop).click(() => document.documentElement.scrollTop = 0);
  });

  const ua = 26;
  const byn = 2;
  const saleForWomen = [true, 0.8];
  const saleForHousehold = [true, 0.9];
  const saleGlister = [true, 0.9];
  const saleNutrilite = [false, 0.9];

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
        case 'glister':
          this.sale = saleGlister;
          break;
        case 'nutrilite':
          this.sale = saleNutrilite;
          break;
        default:
          this.sale = 'noSection';
      };
    }

    setPriceTag() {
      const priceTag = $(`#item-${this.id} .priceTag`)[0];
      $(priceTag).html(`${this.sale[0] ? 'Стоимость: <span style="text-decoration: line-through">'
        + this.price + ' руб.</span> ' + Math.floor(this.price * this.sale[1]) + ' руб.'
         : 'Стоимость: ' + this.price + ' руб.'}`);
    }

    setVideoLink() {
      if (this.video != '') $(`#item-${this.id} .videoBox`).css('display', 'block')[0];
      const demoVideoBtn = $(`#item-${this.id} .btn-demoVideo`)[0];
      if (demoVideoBtn) $(demoVideoBtn).click(() => window.open(this.video, '_blank'));
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
    new Product(17, 'glister', 'Зубная паста', 154.6),
    new Product(18, 'glister', 'Эликсир', 269.79),
    new Product(19, 'glister', 'Щетки', 253.75),
    new Product(20, 'glister', 'Спрей в рот', 123.15),
    new Product(21, 'nutrilite', 'Daily', 596.32),
    new Product(22, 'nutrilite', 'Омега-3', 743.78),
    new Product(23, 'nutrilite', 'Протеин', 1052.09),
    new Product(24, 'nutrilite', 'Витамин С+', 426.09),
    new Product(25, 'nutrilite', 'Чеснок', 478.61),
  ];

  for (let i = 0; i < productList.length; i++) {
    productList[i].setPriceTag();
    productList[i].setVideoLink();
  }

  class Section {
    constructor(section, sale, header, button) {
      this.section = section;
      this.sale = sale;
      this.header = header;
      this.button = button;
      $(button).click(() => this.showSection());
      $(button).html(section.title);
    }

    showSection() {
      const sections = $(this.section.dom).parent().children();
      for (let el of sections) $(el).css('display', 'none');
      const nav = $('nav')[0];
      for (let el of nav.children) el.removeAttribute('style');
      $(header).html(this.header);
      const saleTitle = $('.showSale')[0];
      this.sale[0] ? $(saleTitle).html(`Цены указаны акционные
          (-${Math.round((1 - this.sale[1])* 100)}%).
          Время действия ограничено.`) : $(saleTitle).html('');
      $(this.section.dom).css('display', 'block');
      $(this.button).css('box-shadow', '0 0.5rem 1rem rgba(250, 178, 100, 0.6)');
    }
  }

  const allSections = {
    forWomen:     new Section({title: 'Для девушки', dom: $('.sectionForWoman')}, saleForWomen, 'Что подарить любимой даме', $('.forWoman')),
    forHousehold: new Section({title: 'Для дома', dom: $('.sectionForHousehold')}, saleForHousehold, 'Удобную чистоту в каждый дом', $('.forHousehold')),
    glister:      new Section({title: 'Для зубов', dom: $('.sectionGlister')}, saleGlister, 'Чтобы были здоровы зубы', $('.glister')),
    nutrilite:    new Section({title: 'Для здоровья', dom: $('.sectionNutrilite')}, saleNutrilite, 'Чтобы были здоровы вы и ваши дети', $('.nutrilite')),
  };
});
