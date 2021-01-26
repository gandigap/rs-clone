import create from '../utils/create';
import {
  findNumberOpenTab,
  openTabAndChangeStep,
  checkButtonDisable,
} from '../utils/utils';
import Calendar from './CalendarTab';
import RadioButtonsForm from './RadioButtonsRoomsTab';
import ModalDialogTab from './ModalDialogTab';
import languageData from '../../../languageDate/languageDate.json';

export default class Tabs {
  constructor(indexLanguage) {
    this.indexLanguage = indexLanguage;
    const parent = document.querySelector('.main__other-section');
    this.tabs = create('div', 'main__other-section__tabs d-flex flex-column', null, parent, ['id', 'booking']);
    this.tabButton1 = null;
    this.numberCurrentTab = null;
    this.addTabContent();
  }

  addTabContent() {
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
    ], this.tabs, ['id', 'container__dialog']);
    this.addBlockWithButtonsWhichChangeTabs();
    this.radioButtonsForm = new RadioButtonsForm(this.indexLanguage);
    this.calendar = new Calendar(this.indexLanguage);
    this.modalDialogTab = new ModalDialogTab(this.indexLanguage);
  }

  addBlockWithButtonsWhichChangeTabs() {
    this.buttonStepBlock = create('div', 'main__other-section__tabs__button-step-block d-flex justify-content-center',
      `<button class="main__other-section__tabs__button-step-block__button" id="button-prev-step" tabindex="11">${languageData.buttonPrevStep[this.indexLanguage]}</button>
       <button class="main__other-section__tabs__button-step-block__button" id="button-next-step" tabindex="12">${languageData.buttonNextStep[this.indexLanguage]}</button>`,
      this.tabs);
    this.numberCurrentTab = findNumberOpenTab();
    checkButtonDisable(this.numberCurrentTab);
    this.addListenerForButtonsWhichChangeTabs();
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
        openTabAndChangeStep(this.numberCurrentTab);
        checkButtonDisable(this.numberCurrentTab);
      });
    });
  }
}
