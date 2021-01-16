import 'swiper/bundle';
import 'swiper/swiper-bundle.min';
import 'swiper/swiper-bundle.min.css';

class Main {
  constructor() {
    console.log('Hello from JavaScript!');
  }
}

const main = new Main();
window.main = main;

/* // init Swiper:
const mySwiper = new Swiper('.swiper-container', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
}); */
