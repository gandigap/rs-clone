import create from '../create';
import languageData from '../../languageDate/languageDate.json';

export default class ConfirmForm {
  constructor(indexLanguage) {
    this.indexLanguage = indexLanguage;
    const parent = document.querySelector('.main__modal__content__body');
    this.contentForm = create('div', 'container__confirm-form',
      `<div class="container__confirm-form__error-message hidden"></div>
          <div class="container__confirm-form__success-message hidden">
            <div class="header">Form Completed</div>
            <p>All good!</p>
          </div>
          <form id="confirm-form" class="container__confirm-form__form d-flex flex-column align-items-center" novalidate>
            <div class="container__confirm-form__form-field d-flex justify-content-between align-items-center">
              <label class="container__confirm-form__form-field__label">${languageData.confirmFormField.name[this.indexLanguage]}</label>
              <input class="container__confirm-form__form-field__input" name="name" data-validation="required">
            </div>
            <div class="container__confirm-form__form-field d-flex justify-content-between align-items-center">
              <label class="container__confirm-form__form-field__label">${languageData.confirmFormField.lastName[this.indexLanguage]}</label>
              <input class="container__confirm-form__form-field__input" name="last name">
            </div>
            <div class="container__confirm-form__form-field d-flex justify-content-between align-items-center">
              <label class="container__confirm-form__form-field__label">${languageData.confirmFormField.phone[this.indexLanguage]}</label>
              <input class="container__confirm-form__form-field__input" placeholder="Ex +111111111111" name="phone" data-validation="required phone">
            </div>
            <div class="container__confirm-form__form-field d-flex justify-content-between align-items-center">
              <label class="container__confirm-form__form-field__label">${languageData.confirmFormField.Email[this.indexLanguage]}</label>
              <input class="container__confirm-form__form-field__input" type="email" name="email" data-validation="required email">
            </div>
            <button class="container__confirm-form__button" type="submit">${languageData.confirmFormField.button[this.indexLanguage]}</button>
          </form>`,
      parent);

    this.validations = {
      required(value) {
        return value !== '';
      },
      phone(value) {
        return value.match(/^[\\+]?[(]?[0-9]{3}[)]?[-\s\\.]?[0-9]{3}[-\s\\.]?[0-9]{4,6}$/im);
      },
      email(value) {
        return value.match(/^[\w-\\.]+@([\w-]+\.)+[\w-]{2,4}$/);
      },
    };

    this.validate();
  }

  validate() {
    const form = document.getElementById('confirm-form');
    const inputsArr = form.querySelectorAll('.container__confirm-form__form-field__input');
    const errorMessage = document.querySelector('.container__confirm-form__error-message');
    const successMessage = document.querySelector('.container__confirm-form__success-message');

    form.addEventListener('submit', (e) => {
      let i = 0;
      while (i < inputsArr.length) {
        const attr = inputsArr[i].getAttribute('data-validation');
        const rules = attr ? attr.split(' ') : '';
        const parent = inputsArr[i].closest('.container__confirm-form__form-field');
        let j = 0;
        while (j < rules.length) {
          if (!this.validations[rules[j]](inputsArr[i].value)) {
            e.preventDefault();

            errorMessage.className = 'container__confirm-form__error-message';
            errorMessage.innerHTML = `${languageData.confirmFormField.invalidRule[this.indexLanguage]} '${rules[j]}' ${languageData.confirmFormField.forInput[this.indexLanguage]} '${inputsArr[i].name}'`;
            parent.className = 'container__confirm-form__form-field error';
            return false;
          }
          errorMessage.className = 'container__confirm-form__error-message hidden';
          parent.className = 'container__confirm-form__form-field';
          j += 1;
        }
        i += 1;
      }
      e.preventDefault();
      successMessage.className = 'container__confirm-form__success-message';
      form.outerHTML = '';
      form.remove();
    }, false);
  }
}
