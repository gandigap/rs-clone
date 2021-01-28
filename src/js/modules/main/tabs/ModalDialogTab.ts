import create from '../utils/create';
import languageData from '../../../languageDate/languageDate.json';

export default class ModalDialogTab {
  indexLanguage: any;
  tabIndex: number;
  languageData: string[][];
  arrayAtributes: string[][];
  index: number;
  modalDialogContainer: any;
  arrayTypeRooms: string[];
  blockAnswers: any;
  dialogMale: any;
  dialogAge: any;
  dialogIncome: any;
  buttonsDialog: NodeListOf<Element>;
  constructor(indexLanguage) {
    this.indexLanguage = indexLanguage;
    this.tabIndex = 87;
    const parent = document.getElementById('container__dialog');
    this.languageData = languageData.dialogInfo[this.indexLanguage];
    this.arrayAtributes = [
      ['gender', 'male', 'female', 'trans'],
      ['age', 'youngAge', 'middleAge', 'oldAgeButton'],
      ['income', 'lowIncome', 'middleIncome', 'highIncome']];
    this.index = 0;
    this.modalDialogContainer = create('div', 'dialogs__content',
      `<button class="dialogs__content__button-start" id="openDialog">${this.languageData[5][0]}</button>
       <div class="dialogs__content__answers"></div>`, parent);
    this.arrayTypeRooms = languageData.radioButtons[this.indexLanguage];
    this.initDialogs();
    this.addListeners();
  }

  initDialogs() {
    this.blockAnswers = document.querySelector('.dialogs__content__answers');
    this.arrayAtributes.forEach((el) => {
      create('dialog', `dialogs__content__dialog dialog-${el[0]}`,
        `<h4 class="dialogs__content__dialog__title">${this.languageData[1][this.index]}</h4>
         <div class="dialogs__content__dialog__buttons">
         <button class="dialogs__content__dialog__buttons__button ${el[0]}__button" id="${el[1]}Button">${this.languageData[2][this.index]}</button>
         <button class="dialogs__content__dialog__buttons__button ${el[0]}__button" id="${el[2]}Button">${this.languageData[3][this.index]}</button>
         <button class="dialogs__content__dialog__buttons__button ${el[0]}__button" id="${el[3]}Button">${this.languageData[4][this.index]}</button>
         </div>
         `,
        this.modalDialogContainer);
      this.index += 1;
    });
  }

  addListeners() {
    const buttonStart = document.querySelector('#openDialog');
    buttonStart.addEventListener('click', () => {
      this.dialogMale.showModal();
      this.blockAnswers.innerHTML = '';
    });
    this.dialogMale = document.querySelector('.dialog-gender');
    this.dialogAge = document.querySelector('.dialog-age');
    this.dialogIncome = document.querySelector('.dialog-income');
    this.buttonsDialog = document.querySelectorAll('.dialogs__content__dialog__buttons__button');
    this.buttonsDialog.forEach((el) => {
      el.addEventListener('click', () => {
        if (el.classList.contains('gender__button')) {
          this.dialogMale.close();
          this.dialogAge.showModal();
          create('p', 'dialogs__content__answers__content',
            `${this.languageData[0][0]}<span class="dialogs__content__answers__content-gender">${el.textContent}</span>`, this.blockAnswers);
        } else if (el.classList.contains('age__button')) {
          this.dialogAge.close();
          this.dialogIncome.showModal();
          create('p', 'dialogs__content__answers__content',
            `${this.languageData[0][1]}<span class="dialogs__content__answers__content-age">${el.textContent}</span>`, this.blockAnswers);
        } else if (el.classList.contains('income__button')) {
          this.dialogIncome.close();
          create('p', 'dialogs__content__answers__content',
            `${this.languageData[0][2]}<span class="dialogs__content__answers__content-income">${el.textContent}</span>`, this.blockAnswers);
          create('button', 'dialogs__content__confirm-button', `${this.languageData[6][0]}`, this.blockAnswers, ['id', 'dialog-confirm-button']);
        }
      });
    });
  }
}
