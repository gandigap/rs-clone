import create from '../create';

export default class BurgerMenu {
  constructor() {
    const parent = document.querySelector('.header');
    this.burgerContainer = create('div', 'hamburger-menu',
      `<input id="menu__toggle" class="menu__toggle" type="checkbox" />
       <label class="menu__btn" for="menu__toggle">
               <span></span>
       </label>
       <ul class="menu__box">
           <li><a class="menu__item list__link_active" href="./main.html">About the shelter</a></li>
           <li><a class="menu__item" href="../pets/pets.html">Our pets</a></li>
           <li><a class="menu__item disabled" href="#">Help the shelter</a></li>
           <li><a class="menu__item disabled" href="#">Contacts</a></li>
       </ul>
       <div id="overlay"></div>`, parent);
    this.workWithBurger();
  }

  workWithBurger() {
    this.burger = document.querySelector('#menu__toggle');
    this.overlay = document.getElementById('overlay');
    document.addEventListener('click', (e) => {
      if (e.target.classList.contains('menu__toggle')) {
        if (this.burger.checked) this.disableScroll();
        else this.enableScroll();
      }
    });
    this.overlay.addEventListener('click', () => {
      if (this.burger.checked) {
        this.burger.checked = false;
      }
    });
  }

  disableScroll() {
    document.body.style.overflow = 'hidden';
    this.overlay.classList.add('active');
  }

  enableScroll() {
    document.body.style.overflow = null;
    this.overlay.classList.remove('active');
  }
}
