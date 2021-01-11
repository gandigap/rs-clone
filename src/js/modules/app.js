import FooterBlock from './footer/footerBlock';
import HeaderBlock from './header/headerBlock';
import DataRooms from './main/dataRooms';
import MainBlock from './main/mainBlock';

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
    this.header = new HeaderBlock();
    this.main = new MainBlock();
    this.footer = new FooterBlock();
  }
}

const app = new App();
app.createWrapper();
app.createAppStructure();
