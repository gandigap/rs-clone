import FooterPart from './footer/footerPart';
import HeaderPart from './header/headerPart';
import MainPart from './main/mainPart';

export default class App {
  constructor() {
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
    this.main = new MainPart();
    this.footer = new FooterPart();
  }
}

const app = new App();
app.createWrapper();
app.createAppStructure();
