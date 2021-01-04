export default class MainBlock {
  constructor() {
    const WRAPPER = document.querySelector('.wrapper');
    this.main = document.createElement('main');
    this.main.classList.add('main');
    WRAPPER.appendChild(this.main);
    this.totalInfoSection = null;
    this.otherInfoSection = null;
    this.addSections();
    this.addBlockWithSubContent();
    console.log('main');
  }

  addSections() {
    this.totalInfoSection = document.createElement('section');
    this.otherInfoSection = document.createElement('section');
    this.totalInfoSection.classList.add('main__total-section');
    this.otherInfoSection.classList.add('main__other-section');
    this.main.append(this.totalInfoSection, this.otherInfoSection);
  }

  addBlockWithSubContent() {
    const SUB_CONTENT_BLOCK = document.createElement('div');
    const GALERY_BLOCK = document.createElement('div');
    const BUTTON_BLOCK = document.createElement('button');
    SUB_CONTENT_BLOCK.classList.add('main__other-section__sub-content-block');
    GALERY_BLOCK.classList.add('main__other-section__sub-content-block__galery');
    BUTTON_BLOCK.classList.add('main__other-section__sub-content-block__button');
    SUB_CONTENT_BLOCK.append(GALERY_BLOCK, BUTTON_BLOCK);
    this.otherInfoSection.append(SUB_CONTENT_BLOCK);
  }
}
