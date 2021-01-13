import create from '../create';

export default class RadioButtonsForm {
  constructor() {
    const parent = document.getElementById('container__rooms');
    this.calendar = create('form', 'radio-buttons-form', '<div id="range"></div>', parent);
    this.arrayTypeRooms = ['Quade room', 'Double room', 'Queen room', 'Queen city room', 'King room'];
    this.initRadioButtonsForm();
  }

  initRadioButtonsForm() {
    this.arrayTypeRooms.forEach((element) => {
      const value = element.toLowerCase().split(' ').join('_');
      create('div', 'radio-buttons-form__radiobtn',
        `<input class="radio-buttons-form__radiobtn__input" type="radio" id="${value}" name="drone" value="${value}" checked />
         <label class="radio-buttons-form__radiobtn__label" for="${value}">${element}</label>`, this.calendar);
    });
  }
}
