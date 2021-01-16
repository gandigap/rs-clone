import create from '../create';

export default class BurgerMenu {
  constructor() {
    this.body = document.querySelector('body');
    const parent = document.querySelector('.header');
    this.burgerContainer = create('div', 'hamburger-menu',
      `<div class="hamburger-menu">
      <input id="menu__toggle" type="checkbox" />
      <label class="menu__btn" for="menu__toggle">
        <span></span>
      </label>
  
      <ul class="menu__box">    
        <li><a class="menu__item" href="#booking">Booking</a></li>
        <li><a class="menu__item" href="#about">About</a></li>        
      </ul>
      <div class="overlay__burger__menu"></div>
    </div>`, parent);
    this.workWithMenu();
  }

  workWithMenu() {
    this.burger = document.querySelector('#menu__toggle');
    this.overlay = document.querySelector('.overlay__burger__menu');
    this.links = document.querySelectorAll('.menu__item');

    this.burger.addEventListener('click', () => {
      document.body.style.position = 'fixed';
    });

    this.links.forEach((element) => {
      element.addEventListener('click', () => {
        if (this.burger.checked) {
          this.burger.checked = false;
          document.body.style.position = 'initial';
        }
      });
    });

    this.overlay.addEventListener('click', () => {
      if (this.burger.checked) {
        this.burger.checked = false;
      }
      document.body.style.position = 'initial';
    });
  }

  disableScroll() {
    this.overlay.style.overflow = 'hidden';
  }

  enableScroll() {
    this.overlay.style.overflow = 'initial';
  }
}
