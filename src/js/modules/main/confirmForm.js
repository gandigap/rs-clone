import create from '../create';
import { AccountManager } from '../firebase/accountManager';


export default class ConfirmForm {
    constructor(submitType) {
        this.submitType = submitType;
        this.accountManager = new AccountManager();
        this.contentForm = this.createForm();
        // remove
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
            <div class="container__confirm-form__form-field">
              <label class="container__confirm-form__form-field__label">Name</label>
              <input class="container__confirm-form__form-field__input" name="name" data-validation="required">
            </div>
            <div class="container__confirm-form__form-field">
              <label class="container__confirm-form__form-field__label">Email</label>
              <input class="container__confirm-form__form-field__input" type="email" name="email">
            </div>
            <div class="container__confirm-form__form-field">
              <label class="container__confirm-form__form-field__label">Password:</label>
              <input class="container__confirm-form__form-field__input" type="password" name="password">
            </div>
            <div class="container__confirm-form__form-field">
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
            <div class="container__confirm-form__form-field">
              <label class="container__confirm-form__form-field__label">Email</label>
              <input class="container__confirm-form__form-field__input" type="email" name="email">
            </div>
            <div class="container__confirm-form__form-field">
              <label class="container__confirm-form__form-field__label">Password:</label>
              <input class="container__confirm-form__form-field__input" type="password" name="password">
            </div>
            <button class="container__confirm-form__button" type="submit">Submit</button>
            <div class="container__confirm-form__form-field">
              <label class="container__confirm-form__form-field__label">Are you not registered yet?</label>
              <button class="container__confirm-form__button">Register</button>
            </div>
          </form>`,
            parent);
    }

    validate() {
        const form = document.getElementById('confirm-form');
        // const inputsArr = form.querySelectorAll('.container__confirm-form__form-field__input');
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
            // let i = 0;
            // while (i < inputsArr.length) {
            //     const attr = inputsArr[i].getAttribute('data-validation');
            //     const rules = attr ? attr.split(' ') : '';
            //     const parent = inputsArr[i].closest('.container__confirm-form__form-field');
            //     let j = 0;
            //     while (j < rules.length) {
            //         if (!this.validations[rules[j]](inputsArr[i].value)) {
            //             e.preventDefault();
            //             errorMessage.className = 'container__confirm-form__error-message';
            //             errorMessage.innerHTML = `Invalid rule '${rules[j]}' for input '${inputsArr[i].name}'`;
            //             parent.className = 'container__confirm-form__form-field error';
            //             return false;
            //         }
            //         errorMessage.className = 'container__confirm-form__error-message hidden';
            //         parent.className = 'container__confirm-form__form-field';
            //         j += 1;
            //     }
            //     i += 1;
            // }

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
