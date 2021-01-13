import Swiper from 'swiper';
import create from '../create';
import CardRoom from './cardRoom';
import DataInfo from './dataRooms';

export default class SwiperGalery {
  constructor() {
    const parent = document.querySelector('.main__other-section__sub-content-block__galery-modal__modal__content__body');
    this.swiperContainer = create('div', 'swiper-container gallery-top',
      `<div class="swiper-wrapper"></div>
       <div class="swiper-button-next swiper-button-white"></div>
       <div class="swiper-button-prev swiper-button-white"></div>`,
      parent);
    this.swiperContainer2 = create('div', 'swiper-container gallery-thumbs',
      '<div class="swiper-wrapper"></div>', parent);
    this.data = DataInfo;
    this.countCard = 0;
    this.addCardsWithRooms();
    this.initSwiper();
  }

  initSwiper() {
    this.galleryThumbs = new Swiper('.gallery-thumbs', {
      spaceBetween: 10,
      slidesPerView: 5,
      freeMode: true,
      watchSlidesVisibility: true,
      watchSlidesProgress: true,
    });
    this.galleryTop = new Swiper('.gallery-top', {
      spaceBetween: 10,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      thumbs: {
        swiper: this.galleryThumbs,
      },
    });
  }

  addCardsWithRooms() {
    console.log(this.data);
    this.data.forEach((element) => {
      this.currentCard = new CardRoom(element, this.countCard);
      this.countCard += 1;
    });
  }
}
