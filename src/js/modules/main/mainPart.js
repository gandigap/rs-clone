import create from '../create';
import Modal from './createModal';
import DescriptionBlock from './descriptionPart';
import Tabs from './tabs';
import Audio from './audio';

export default class MainPart {
  constructor() {
    const parent = document.querySelector('.wrapper');
    this.main = create('main', 'main', null, parent);
    this.totalInfoSection = null;
    this.otherInfoSection = null;
    this.addSections();
  }

  addSections() {
    this.totalInfoSection = create('section', 'main__total-section', null, this.main);
    this.otherInfoSection = create('section', 'main__other-section', null, this.main);
    this.tabs = new Tabs();
    this.addBlockWithMainImageAndTitle();
    this.addBlockWithSubContent();
  }

  addBlockWithSubContent() {
    this.subContentBlock = create('div', 'main__other-section__sub-content-block', null, this.otherInfoSection);
    this.someBlock = create('div', 'main__other-section__sub-content-block__description', null, this.subContentBlock);
    this.containerForButtonOpenGaleryRooms = create('div', 'main__other-section__sub-content-block__button-container', null, this.subContentBlock);
    this.descriptionHotel = new DescriptionBlock();
    this.addButtonOpenGaleryRooms();
    this.audio = new Audio();
    this.modal = new Modal();
  }

  addBlockWithMainImageAndTitle() {
    this.mainTitle = create('h2', 'main__total-section__title', 'PARADISE', this.totalInfoSection);
    this.figureMainImage = create('figure', 'main__total-section__image-container',
      '<img class="main__total-section__image-container__img" src="assets/images/appartments/hotel.svg" alt="Our Hotel">',
      this.totalInfoSection);
  }

  addButtonOpenGaleryRooms() {
    this.buttonConfirmForm = create('button', 'button-open-modal main__other-section__sub-content-block__button-container__button', 'ROOMS', this.containerForButtonOpenGaleryRooms, ['id', 'button-open-galery']);
  }
}
