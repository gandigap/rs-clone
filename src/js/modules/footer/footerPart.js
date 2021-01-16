import create from '../create';

export default class FooterBlock {
  constructor() {
    const wrapper = document.querySelector('.wrapper');
    this.footer = create('footer', 'footer', null, wrapper);
    this.addInfoFooter();
  }

  addInfoFooter() {
    this.textInfo = create('div', 'footer__text',
      `<a class="footer__text__link" href="https://github.com/AnhelinaVr">anhelinavr</a>
       <a class="footer__text__link" href="https://github.com/gandigap">gandigap</a>`,
      this.footer);
    this.logoInfo = create('div', 'footer__logo',
      `<a class="footer__logo__link" href="https://rs.school/">
        <img class="footer__logo__link__img" src="assets/images/rs_school_js.svg" alt="rs_school_js">
      </a>
      <figcaption class="footer__logo__link__figcaption">2020</figcaption>`,
      this.footer);
  }
}
