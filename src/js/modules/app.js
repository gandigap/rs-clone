import FooterBlock from './footerBlock';
import HeaderBlock from './headerBlock';
import MainBlock from './mainBlock';

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
    this.header = new FooterBlock();
  }
}

const app = new App();
app.createWrapper();
app.createAppStructure();
