import create from '../create';

export default class ConfirmForm {
  constructor() {
    const confirmContainer = document.getElementById('container__confirm');
    this.contentForm = create('div', 'content__form', null, confirmContainer);
  }
}
