import changeLanguage from './changeLanguage';
import HeaderPart from './header/headerPart';
import MainPart from './main/mainPart';
import FooterPart from './footer/footerPart';
import BurgerMenu from './header/burgerMenu';
import HotKeysListener from './hotKeysListener';
import create from './create';
import SwitcherColor from './switcherColorTheme';

export default class App {
  constructor(indexLanguage) {
    this.indexLanguage = indexLanguage;
    this.body = document.querySelector('body');
    this.header = null;
  }

  createWrapper() {
    this.container = create('div', 'container-xl p-0', null, this.body);
  }

  createAppStructure() {
    this.header = new HeaderPart();
    this.main = new MainPart(0);
    this.footer = new FooterPart();
    this.burgerMenu = new BurgerMenu(0);
    this.switcherColor = new SwitcherColor();
    this.hotKeysListeners = new HotKeysListener();
  }
}

const app = new App();
app.createWrapper();
app.createAppStructure();
changeLanguage();
