import changeLanguage from './main/utils/changeLanguage';
import HeaderPart from './header/HeaderPart';
import MainPart from './main/MainPart';
import FooterPart from './footer/FooterPart';
import BurgerMenu from './header/BurgerMenu';
import HotKeysListener from './main/utils/hotKeysListener';
import create from './main/utils/create';
import SwitcherColor from './header/SwitcherColorTheme';

export default class App {
  // indexLanguage: any;
  header: HeaderPart;
  container: HTMLElement;
  body: HTMLBodyElement;
  main: MainPart;
  footer: FooterPart;
  burgerMenu: BurgerMenu;
  switcherColor: SwitcherColor;
  hotKeysListeners: HotKeysListener;

  constructor() {
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
