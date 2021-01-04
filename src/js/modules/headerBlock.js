export default class HeaderBlock {
  constructor() {
    const WRAPPER = document.querySelector('.wrapper');
    this.header = document.createElement('header');
    this.header.classList.add('header');
    WRAPPER.appendChild(this.header);
    console.log('header');
  }
}