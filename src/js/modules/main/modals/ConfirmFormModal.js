import create from '../utils/create';
import { AccountManager } from '../../firebase/accountManager.js';
import languageData from '../../../languageDate/languageDate.json'


export default class ConfirmForm {
    constructor(submitType, indexLanguage) {
        this.submitType = submitType;
        this.indexLanguage = indexLanguage;
        this.accountManager = new AccountManager();
        this.contentForm = this.createForm();

        this.validate();
    }

    createForm() {
        const parent = document.querySelector('.main__modal__content__body');
        console.log(this.submitType)
        const register = !!(this.submitType === 'registration');
        if (register)
            return create('div', 'container__confirm-form',
                `<div class="container__confirm-form__error-message hidden"></div>
          <div class="container__confirm-form__message">
          </div>
          <form id="confirm-form" class="container__confirm-form__form" novalidate>
            <div class="container__confirm-form__form-field d-flex justify-content-between align-items-center">
              <label class="container__confirm-form__form-field__label">Name</label>
              <input class="container__confirm-form__form-field__input" name="name" data-validation="required">
            </div>
            <div class="container__confirm-form__form-field d-flex justify-content-between align-items-center">
              <label class="container__confirm-form__form-field__label">${languageData.confirmFormField.Email[this.indexLanguage]}</label>
              <input class="container__confirm-form__form-field__input" type="email" name="email">
            </div>
            <div class="container__confirm-form__form-field d-flex justify-content-between align-items-center">
              <label class="container__confirm-form__form-field__label">Password:</label>
              <input class="container__confirm-form__form-field__input" type="password" name="password">
            </div>
            <div class="container__confirm-form__form-field d-flex justify-content-between align-items-center">
              <label class="container__confirm-form__form-field__label">Confirm password:</label>
              <input class="container__confirm-form__form-field__input" type="password" name="password-confirm" data-confirm-password>
            </div>
             <button class="container__confirm-form__button" type="submit">Submit</button>
          </form>`,
                parent);
        else return create('div', 'container__confirm-form',
            `<div class="container__confirm-form__error-message hidden"></div>
          <div class="container__confirm-form__message">
                      </div>
          <form id="confirm-form" class="container__confirm-form__form" novalidate>
            <div class="container__confirm-form__form-field d-flex justify-content-between align-items-center">
              <label class="container__confirm-form__form-field__label">Email</label>
              <input class="container__confirm-form__form-field__input" type="email" name="email">
            </div>
            <div class="container__confirm-form__form-field d-flex justify-content-between align-items-center">
              <label class="container__confirm-form__form-field__label">Password:</label>
              <input class="container__confirm-form__form-field__input" type="password" name="password">
            </div>
            <button class="container__confirm-form__button" type="submit">Submit</button>
            <div class="container__confirm-form__form-field d-flex justify-content-between align-items-center">
              <label class="container__confirm-form__form-field__label">Are you not registered yet?</label>
              <button class="container__confirm-form__button">Register</button>
            </div>
          </form>`,
            parent);
    }

    validate() {
        const form = document.getElementById('confirm-form');
        const messageContainer = document.querySelector('.container__confirm-form__message');
        form.addEventListener('click', (e) => {
            if (e.target.tagName === 'BUTTON' && e.target.textContent === 'Register') {
                form.outerHTML = '';
                form.remove();
                this.accountManager.changeModalContent('confirmForm', true);
            }
        });
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            if (this.submitType === 'signIn') {
                this.accountManager.signInUser(messageContainer);
            } else {
                this.accountManager.registerUser(messageContainer);
            }
            // successMessage.className = 'container__confirm-form__success-message';
            // form.outerHTML = '';
            // form.remove();

        }, false);
    }
}