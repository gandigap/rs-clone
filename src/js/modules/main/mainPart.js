import create from '../create';
import Modal from './createModal';
import DescriptionBlock from './descriptionPart';
import Tabs from './tabs';
import Audio from './audio';
import languageData from '../../languageDate/languageDate.json';

export default class MainPart {
  constructor(indexLanguage) {
    this.indexLanguage = indexLanguage;
    const parent = document.querySelector('.container-xl');
    this.main = create('main', 'main d-flex', null, parent);
    this.totalInfoSection = null;
    this.otherInfoSection = null;
    this.addSections();
  }

  addSections() {
    this.totalInfoSection = create('section', 'main__total-section col-xl-5 d-flex flex-column align-items-center p-0', null, this.main);
    this.otherInfoSection = create('section', 'main__other-section col-xl-7 d-flex flex-column p-0', null, this.main);
    this.tabs = new Tabs(this.indexLanguage);
    this.addBlockWithMainImageAndTitle();
    this.addBlockWithSubContent();
  }

  addBlockWithSubContent() {
    this.subContentBlock = create('div', 'main__other-section__sub-content-block row m-0', null, this.otherInfoSection); //d-flex align-self-end
    this.someBlock = create('div', 'main__other-section__sub-content-block__description col-sm-12 col-md-9 p-0', null, this.subContentBlock);
    this.containerForButtonOpenGaleryRooms = create('div', 'main__other-section__sub-content-block__button-container col-sm-12 col-md-3 p-0', null, this.subContentBlock);
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
    this.buttonSearchGalery = create('button', 'button-open-modal main__other-section__sub-content-block__button-container__button col-md-12 p-0',
      `${languageData.galeryButton[this.indexLanguage]}`,
      this.containerForButtonOpenGaleryRooms,
      ['id', 'button-open-galery'], ['tabindex', '13']);
  }
}
