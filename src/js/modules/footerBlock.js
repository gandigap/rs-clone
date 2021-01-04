export default class FooterBlock {
  constructor() {
    const WRAPPER = document.querySelector('.wrapper');
    this.footer = document.createElement('footer');
    this.footer.classList.add('footer');
    WRAPPER.appendChild(this.footer);
    this.addInfoFooter();
    console.log('footer');
  }

  addInfoFooter() {
    const TEXT_INFO = document.createElement('div');
    const LOGO_INFO = document.createElement('figure');
    TEXT_INFO.classList.add('footer__text');
    TEXT_INFO.innerHTML = `<a href="">anhelinavr</a>
                           <a href="">gandigap</a>`;
    LOGO_INFO.classList.add('footer__logo');
    LOGO_INFO.innerHTML = `<a class="footer__logo__link" href="https://rs.school/">
                             <img class="footer__logo__link__img" src="assets/images/rs_school_js.svg" alt="rs_school_js">
                           </a>
                           <figcaption class="footer__logo__link__figcaption">2020</figcaption>`;
    this.footer.append(TEXT_INFO, LOGO_INFO);
  }
}