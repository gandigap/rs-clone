import create from './create';
import ModalGalery from './modalGallery';
import Tabs from './tabs';

export default class MainBlock {
  constructor() {
    const wrapper = document.querySelector('.wrapper');
    this.main = create('main', 'main', null, wrapper);
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
    this.someBlock = create('div', 'main__other-section__sub-content-block__some', null, this.subContentBlock);
    this.galeryModalBlock = create('div', 'main__other-section__sub-content-block__galery-modal', null, this.subContentBlock);
    this.modal = new ModalGalery();
  }

  addBlockWithMainImageAndTitle() {
    this.figureMainImage = create('figure', 'main__total-section__main-image-container',
      '<img class="main-image-container__img" src="assets/images/appartments/hotel.svg" alt="Our Hotel">',
      this.totalInfoSection);
    this.mainTitle = create('h2', 'main__total-section__main-title', 'Our Hotel', this.totalInfoSection);
  }
}
