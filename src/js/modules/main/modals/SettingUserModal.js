import create from '../utils/create';
import languageData from '../../../languageDate/languageDate.json';

export default class SettingUserModal {
  constructor(indexLanguage) {
    this.indexLanguage = indexLanguage;
    const parent = document.querySelector('.main__modal__content__body');
    this.contentForm = create('div', 'container__hotkeys',
      'example',
      parent);
  }
}
