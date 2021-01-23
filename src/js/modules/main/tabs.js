import create from '../create';
import Calendar from './calendar';
import RadioButtonsForm from './radioButtonsForm';
import languageData from '../../languageDate/languageDate.json';

export default class Tabs {
  constructor(indexLanguage) {
    this.indexLanguage = indexLanguage;
    const parent = document.querySelector('.main__other-section');
    this.tabs = create('div', 'main__other-section__tabs d-flex flex-column', null, parent, ['id', 'booking']);
    this.tabButton1 = null;
    this.addTabContent();
  }

  addTabContent() {
    this.numberCurrentTab = 0;
    this.tab = create('div', 'main__other-section__tabs__tab d-flex', [
      create('button', 'main__other-section__tabs__tab__button flex-grow-1 tab__button-active', `${languageData.tabHeader[this.indexLanguage]} 1`),
      create('button', 'main__other-section__tabs__tab__button flex-grow-1', `${languageData.tabHeader[this.indexLanguage]} 2`),
      create('button', 'main__other-section__tabs__tab__button flex-grow-1', `${languageData.tabHeader[this.indexLanguage]} 3`),
    ], this.tabs);
    this.tabcontent1 = create('div', 'main__other-section__tabs__tabcontent tab__open', [
      create('h3', 'main__other-section__tabs__tabcontent__title', `${languageData.tabcontent1Title[this.indexLanguage]}`),
    ], this.tabs, ['id', 'container__rooms']);
    this.tabcontent2 = create('div', 'main__other-section__tabs__tabcontent', [
      create('h3', 'main__other-section__tabs__tabcontent__title', `${languageData.tabcontent2Title[this.indexLanguage]}`),
    ], this.tabs, ['id', 'container__date']);
    this.tabcontent3 = create('div', 'main__other-section__tabs__tabcontent', [
      create('h3', 'main__other-section__tabs__tabcontent__title', `${languageData.tabcontent3Title[this.indexLanguage]}`),
    ], this.tabs, ['id', 'container__confirm']);
    this.addBlockWithButtonsWhichChangeTabs();

    this.radioButtonsForm = new RadioButtonsForm(this.indexLanguage);
    this.calendar = new Calendar(this.indexLanguage);
  }

  addBlockWithButtonsWhichChangeTabs() {
    this.buttonStepBlock = create('div', 'main__other-section__tabs__button-step-block d-flex justify-content-center',
      `<button class="main__other-section__tabs__button-step-block__button" id="button-prev-step" tabindex="11">${languageData.buttonPrevStep[this.indexLanguage]}</button>
       <button class="main__other-section__tabs__button-step-block__button" id="button-next-step" tabindex="12">${languageData.buttonNextStep[this.indexLanguage]}</button>`,
      this.tabs);
    this.addListenerForButtonsWhichChangeTabs();
    this.checkButtonDisable();
  }

  addListenerForButtonsWhichChangeTabs() {
    const buttonsChangeTab = document.querySelectorAll('.main__other-section__tabs__button-step-block__button');
    buttonsChangeTab.forEach((element) => {
      element.addEventListener('click', () => {
        if (element.getAttribute('id') === 'button-prev-step' && this.numberCurrentTab !== 0) {
          this.numberCurrentTab -= 1;
        } else if (element.getAttribute('id') === 'button-next-step' && this.numberCurrentTab !== 2) {
          this.numberCurrentTab += 1;
        }
        this.openTabAndChangeStep();
        this.checkButtonDisable();
      });
    });
  }

  openTabAndChangeStep() {
    const tabOpen = document.querySelector('.tab__open');
    const stepActive = document.querySelector('.tab__button-active');
    const allTabs = document.querySelectorAll('.main__other-section__tabs__tabcontent');
    const allSteps = document.querySelectorAll('.main__other-section__tabs__tab__button');
    tabOpen.classList.remove('tab__open');
    stepActive.classList.remove('tab__button-active');
    allTabs[this.numberCurrentTab].classList.add('tab__open');
    allSteps[this.numberCurrentTab].classList.add('tab__button-active');
  }

  checkButtonDisable() {
    const buttonPrev = document.getElementById('button-prev-step');
    const buttonNext = document.getElementById('button-next-step');
    if (this.numberCurrentTab === 0) {
      buttonPrev.classList.add('button__disable');
    } else {
      buttonPrev.classList.remove('button__disable');
    }

    if (this.numberCurrentTab === 2) {
      buttonNext.classList.add('button__disable');
    } else {
      buttonNext.classList.remove('button__disable');
    }
  }
}
