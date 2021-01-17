import changeLanguage from './changeLanguage';
import HeaderPart from './header/headerPart';
import MainPart from './main/mainPart';
import FooterPart from './footer/footerPart';
import BurgerMenu from './header/burgerMenu';

export default class App {
  constructor(indexLanguage) {
    this.indexLanguage = indexLanguage;
    this.body = document.querySelector('body');
    this.header = null;
  }

  createWrapper() {
    const WRAPPER = document.createElement('div');
    WRAPPER.classList.add('wrapper');
    this.body.appendChild(WRAPPER);
  }

  createAppStructure() {
    this.header = new HeaderPart();
    this.main = new MainPart(0);
    this.footer = new FooterPart();
    this.burgerMenu = new BurgerMenu(0);
  }
}

const app = new App();
app.createWrapper();
app.createAppStructure();
changeLanguage();
