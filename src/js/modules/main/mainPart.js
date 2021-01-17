import create from '../create';
import Modal from './createModal';
import DescriptionBlock from './descriptionPart';
import Tabs from './tabs';
import Audio from './audio';
import languageData from '../../languageDate/languageDate.json';

export default class MainPart {
  constructor(indexLanguage) {
    this.indexLanguage = indexLanguage;
    const parent = document.querySelector('.wrapper');
    this.main = create('main', 'main', null, parent);
    this.totalInfoSection = null;
    this.otherInfoSection = null;
    this.addSections();
  }

  addSections() {
    this.totalInfoSection = create('section', 'main__total-section', null, this.main);
    this.otherInfoSection = create('section', 'main__other-section', null, this.main);
    this.tabs = new Tabs(this.indexLanguage);
    this.addBlockWithMainImageAndTitle();
    this.addBlockWithSubContent();
  }

  addBlockWithSubContent() {
    this.subContentBlock = create('div', 'main__other-section__sub-content-block', null, this.otherInfoSection);
    this.someBlock = create('div', 'main__other-section__sub-content-block__description', null, this.subContentBlock);
    this.containerForButtonOpenGaleryRooms = create('div', 'main__other-section__sub-content-block__button-container', null, this.subContentBlock);
    this.descriptionHotel = new DescriptionBlock(this.indexLanguage);
    this.addButtonOpenGaleryRooms();
    this.audio = new Audio();
    this.modal = new Modal(this.indexLanguage);
  }

  addBlockWithMainImageAndTitle() {
    this.mainTitle = create('h2', 'main__total-section__title', `${languageData.mainTitle[this.indexLanguage]}`, this.totalInfoSection);
    this.figureMainImage = create('figure', 'main__total-section__image-container',
      `<img class="main__total-section__image-container__img" src="assets/images/appartments/hotel.svg" alt="${languageData.mainTitle[this.indexLanguage]}">`,
      this.totalInfoSection);
  }

  addButtonOpenGaleryRooms() {
    this.buttonSearchGalery = create('button', 'button-open-modal main__other-section__sub-content-block__button-container__button', `${languageData.galeryButton[this.indexLanguage]}`, this.containerForButtonOpenGaleryRooms, ['id', 'button-open-galery']);
  }
}
