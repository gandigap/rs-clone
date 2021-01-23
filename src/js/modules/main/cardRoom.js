import create from '../create';
import languageData from '../../languageDate/languageDate.json';
import 'swiper/bundle';
import 'swiper/swiper-bundle.min';
import 'swiper/swiper-bundle.min.css';

export default class CardRoom {
  constructor(dataRoom, index, indexLanguage) {
    this.indexLanguage = indexLanguage;
    this.index = index;
    this.dataRoom = languageData;
    this.src = dataRoom.srcImg;
    this.title = dataRoom.name;
    this.price = dataRoom.price;
    this.description = dataRoom.description;
    this.facilities = dataRoom.facilities;
    const swiperWrappers = document.querySelectorAll('.swiper-wrapper');
    this.swiperWrapper = swiperWrappers[0];
    this.swiperWrapper2 = swiperWrappers[1];
    this.addAllDates();
  }

  addAllDates() {
    this.swiperSlide = create('div', 'swiper-slide',
      `<div class="swiper-slide__content">
         <div class="swiper-slide__content__info">
           <h3 class="swiper-slide__content__info__title">${this.title}</h3>
           <p class="swiper-slide__content__info__description">${this.description}</p>
           <ul class="swiper-slide__content__info__facilities"></ul>
           <p class="swiper-slide__content__info__price">Price: ${this.price}</p>
         </div>
         <img class="swiper-slide__galery-top__img" src="${this.src}" alt="${this.title}">
       </div>`,
      this.swiperWrapper);
    this.swiperSlide2 = create('div', 'swiper-slide',
      `<img class="swiper-slide__galery-thumbs__img" src="${this.src}" alt="${this.title}">`,
      this.swiperWrapper2);
    const listFacilities = document.querySelectorAll('.swiper-slide__content__info__facilities');
    this.facilities.forEach((element) => {
      this.itemFacilities = create('li', 'swiper-slide__content__info__facilities__item', `${element}`, listFacilities[this.index]);
    });
  }
}
