import create from '../utils/create';
import languageData from '../../../languageDate/languageDate.json';

export default class RadioButtonsRoomsTab {
  constructor(indexLanguage) {
    this.indexLanguage = indexLanguage;
    this.tabIndex = 5;
    const parent = document.getElementById('container__rooms');
    this.radioButtonContainer = create('div', 'radio-buttons-form d-flex flex-wrap', '<div id="range"></div>', parent);
    this.arrayTypeRooms = languageData.radioButtons[this.indexLanguage];
    this.initRadioButtonsForm();
  }

  initRadioButtonsForm() {
    this.arrayTypeRooms.forEach((element) => {
      const value = element.toLowerCase().split(' ').join('_');
      create('div', 'radio-buttons-form__radiobtn',
        `<input class="radio-buttons-form__radiobtn__input" type="radio" id="${value}" name="drone" value="${value}" />
         <label class="radio-buttons-form__radiobtn__label" for="${value}" tabindex="${this.tabIndex}">${element}</label>`, this.radioButtonContainer);
      this.tabIndex += 1;
    });
  }
}
