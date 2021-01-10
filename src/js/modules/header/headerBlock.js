import create from '../create';

export default class HeaderBlock {
  constructor() {
    const wrapper = document.querySelector('.wrapper');
    this.header = create('header', 'header', null, wrapper);
    this.addHiddenTitleH1();
    this.addContactInfo();
    this.addLanguageBlock();
  }

  addHiddenTitleH1() {
    this.hiddenTitleBlock = create('div', 'header__hidden-title', 'Super Hotel', this.header);
  }

  addContactInfo() {
    this.infoBlock = create('div', 'header__info-block', [
      create('a', 'header__info-block__content',
        `<img class="header__info-block__content__icon" src="assets/icons/telephone.svg" alt="phone">
      <p class="header__info-block__content__text">+777 777 777</p>`, this.infoBlock, ['href', 'tel:+777 777 777']),
      create('a', 'header__info-block__content',
        `<img class="header__info-block__content__icon" src="assets/icons/placeholder.svg" alt="placeholder">
      <p class="header__info-block__content__text">Whitehall Pl, Westminster, London SW1A 2BD</p>`, this.infoBlock, ['href', 'https://www.google.ru/maps/@36.0909621,-112.0230656,12748m/data=!3m1!1e3']),
    ], this.header);
  }

  addLanguageBlock() {
    this.languageBlock = create('div', 'header__language-selector', null, this.header, ['id', 'google_translate_element']);
    /* this.languageBlock = create('div', 'header__language-block', [
      create('select', 'header__language-block__list',
        `<option value="RU">RU</option>
         <option value="EN">EN</option>
         <option value="DE">DE</option>`, this.languageBlock),
    ], this.header); */
  }
}
