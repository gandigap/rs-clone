import create from '../create';

export default class HeaderPart {
  constructor() {
    const parent = document.querySelector('.wrapper');
    this.header = create('header', 'header', null, parent);
    this.addHiddenTitleH1();
    this.addButtonOpenConfirmForm();
    this.addContactInfo();
    this.addLanguageBlock();
  }

  addHiddenTitleH1() {
    this.hiddenTitleBlock = create('h1', 'header__hidden-title', 'Super Hotel', this.header);
  }

  addContactInfo() {
    this.infoBlock = create('div', 'header__info-part', [
      create('a', 'header__info-part__content',
        `<img class="header__info-part__content__icon" src="assets/icons/telephone.svg" alt="phone">
      <p class="header__info-part__content__text">+777 777 777</p>`, this.infoBlock, ['href', 'tel:+777 777 777']),
      create('a', 'header__info-part__content',
        `<img class="header__info-part__content__icon" src="assets/icons/placeholder.svg" alt="placeholder">
      <p class="header__info-part__content__text">Kahuku, HI 96731</p>`, this.infoBlock, ['href', 'https://www.google.ru/maps/place/Kuilima+Dr,+Kahuku,+HI+96731,+%D0%A1%D0%A8%D0%90/@21.5409981,-157.9387017,9.75z/data=!4m5!3m4!1s0x7c005055eaf7c119:0xadac5046fe3ba1ce!8m2!3d21.7052579!4d-157.9987524']),
    ], this.header);
  }

  addLanguageBlock() {
    this.languageBlock = create('div', 'header__language-block', [
      create('select', 'header__language-block__list',
        `<option value="EN">EN</option>
         <option value="RU">RU</option>
         <option value="DE">DE</option>`, this.languageBlock, ['id', 'select__language']),
    ], this.header);
  }

  addButtonOpenConfirmForm() {
    this.buttonConfirmForm = create('button', 'button-open-modal header__button-log', 'Log in', this.header, ['id', 'button-open-confirm-form']);
  }
}
