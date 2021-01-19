import create from '../create';
import languageData from '../../languageDate/languageDate.json';

export default class RadioButtonsForm {
  constructor(indexLanguage) {
    this.indexLanguage = indexLanguage;
    this.tabIndex = 5;
    const parent = document.getElementById('container__rooms');
    this.calendar = create('form', 'radio-buttons-form', '<div id="range"></div>', parent);
    this.arrayTypeRooms = languageData.radioButtons[this.indexLanguage];
    this.initRadioButtonsForm();
  }

  initRadioButtonsForm() {
    this.arrayTypeRooms.forEach((element) => {
      const value = element.toLowerCase().split(' ').join('_');
      create('div', 'radio-buttons-form__radiobtn',
        `<input class="radio-buttons-form__radiobtn__input" type="radio" id="${value}" name="drone" value="${value}" />
         <label class="radio-buttons-form__radiobtn__label" for="${value}" tabindex="${this.tabIndex}">${element}</label>`, this.calendar);
      this.tabIndex += 1;
    });
  }
}
