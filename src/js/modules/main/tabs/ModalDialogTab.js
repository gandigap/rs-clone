import create from '../utils/create';
import languageData from '../../../languageDate/languageDate.json';

export default class ModalDialogTab {
  constructor(indexLanguage) {
    this.indexLanguage = indexLanguage;
    this.tabIndex = 87;
    const parent = document.getElementById('container__dialog');
    this.languageData = languageData.dialogInfo[this.indexLanguage];
    this.modalDialogContainer = create('div', 'dialogs__content',
      `<button class="dialogs__content__button-start" id="openDialog">${this.languageData.buttonOpen}</button>
      <dialog class="dialogs__content__dialog dialog-gender" class='dialog-gender'>
        <h4>${this.languageData.dialogGenderContent}</h4>
        <button class="dialogs__content__dialog__button gender__button" id="maleButton">${this.languageData.dialogGenderButtonOne}</button>
        <button class="dialogs__content__dialog__button gender__button" id="femaleButton">${this.languageData.dialogGenderButtonTwo}</button>
        <button class="dialogs__content__dialog__button gender__button" id="transButton">${this.languageData.dialogGenderButtonThree}</button>
      </dialog>
      <dialog class="dialogs__content__dialog dialog-age">
        <h4>${this.languageData.dialogAgeContent}</h4>
        <button class="dialogs__content__dialog__button age__button" id="youngAgeButton">${this.languageData.dialogAgeButtonOne}</button>
        <button class="dialogs__content__dialog__button age__button" id="middleAgeButton">${this.languageData.dialogAgeButtonTwo}</button>
        <button class="dialogs__content__dialog__button age__button" id="oldAgeButton">${this.languageData.dialogAgeButtonThree}</button>
      </dialog>
      <dialog class="dialogs__content__dialog dialog-income">
        <h4>${this.languageData.dialogAgeContent}</h4>
        <button class="dialogs__content__dialog__button income__button" id="lowIncomeButton">${this.languageData.dialogIncomeButtonOne}</button>
        <button class="dialogs__content__dialog__button income__button" id="middleIncomeButton">${this.languageData.dialogIncomeButtonTwo}</button>
        <button class="dialogs__content__dialog__button income__button" id="highIncomeButton">${this.languageData.dialogIncomeButtonThree}</button>
      </dialog>`, parent);
    this.arrayTypeRooms = languageData.radioButtons[this.indexLanguage];
    this.addListeners();
  }

  addListeners() {
    document.querySelector('#openDialog').addEventListener('click', () => {
      this.dialogMale.showModal();
    });
    this.dialogMale = document.querySelector('.dialog-gender');
    this.dialogAge = document.querySelector('.dialog-age');
    this.dialogIncome = document.querySelector('.dialog-income');
    this.buttonsDialog = document.querySelectorAll('.dialogs__content__dialog__button');
    this.buttonsDialog.forEach((el) => {
      el.addEventListener('click', () => {
        if (el.classList.contains('gender__button')) {
          this.dialogMale.close();
          this.dialogAge.showModal();
        } else if (el.classList.contains('age__button')) {
          this.dialogAge.close();
          this.dialogIncome.showModal();
        } else if (el.classList.contains('income__button')) {
          this.dialogIncome.close();
        }
      });
    });
  }
}
