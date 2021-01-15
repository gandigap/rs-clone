import create from '../create';
import Calendar from './calendar';
import RadioButtonsForm from './radioButtonsForm';
import Language from './language';
import CalendarTwo from './calendarTwo';

export default class Tabs {
  constructor() {
    const parent = document.querySelector('.main__other-section');
    this.tabs = create('div', 'main__other-section__tabs', null, parent);
    this.tabButton1 = null;
    this.addTabContent();
  }

  addTabContent() {
    this.numberCurrentTab = 0;
    this.tab = create('div', 'main__other-section__tabs__tab', [
      create('button', 'main__other-section__tabs__tab__button tab__button-active', 'Step1'),
      create('button', 'main__other-section__tabs__tab__button', 'Step2'),
      create('button', 'main__other-section__tabs__tab__button', 'Step3'),
    ], this.tabs);
    this.tabcontent1 = create('div', 'main__other-section__tabs__tabcontent tab__open', [
      create('h3', 'main__other-section__tabs__tabcontent__title', 'Please check room that you need'),
    ], this.tabs, ['id', 'container__rooms']);
    this.tabcontent2 = create('div', 'main__other-section__tabs__tabcontent', [
      create('h3', 'main__other-section__tabs__tabcontent__title', 'Please check date'),
    ], this.tabs, ['id', 'container__date']);
    this.tabcontent3 = create('div', 'main__other-section__tabs__tabcontent', [
      create('h3', 'main__other-section__tabs__tabcontent__title', 'Confirm'),
    ], this.tabs, ['id', 'container__confirm']);
    this.addBlockWithButtonsWhichChangeTabs();

    this.radioButtonsForm = new RadioButtonsForm();
    this.calendar = new Calendar();
    this.calendarTwo = new CalendarTwo();
    this.language = new Language();
  }

  addBlockWithButtonsWhichChangeTabs() {
    this.buttonStepBlock = create('div', 'main__other-section__tabs__button-step-block',
      `<button class="main__other-section__tabs__button-step-block__button" id="button-prev-step">Prev</button>
       <button class="main__other-section__tabs__button-step-block__button" id="button-next-step">Next</button>`,
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
