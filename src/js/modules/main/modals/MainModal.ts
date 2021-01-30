import create from '../utils/create';
import languageData from '../../../languageDate/languageDate.json';
import { showAndAddStructureModal, changeModalContent, modalClose } from '../utils/utils';

export default class Modal {
  modalContent: any;
  indexLanguage: any;
  modal: any;
  audio: any;
  modalHeaderTitle: any;
  span: any;
  confirmForm: any;
  constructor(indexLanguage) {
    this.indexLanguage = indexLanguage;
    const parent = document.querySelector('.main');
    this.modal = create('div', 'main__modal', null, parent, ['id', 'main__modal']);
    this.addListenersForButtonsOpenModal();
  }

  addListenersForButtonsOpenModal() {
    const buttonsWhichOpenModal = document.querySelectorAll('.button-open-modal');
    buttonsWhichOpenModal.forEach((button: HTMLButtonElement) => {
      button.onclick = () => {
        document.body.style.overflow = 'hidden';
        const param = button.textContent;
        showAndAddStructureModal();
        this.addListenerForCloseModal();

        if (param === languageData.galleryButton[this.indexLanguage]) {
          changeModalContent('gallery', this.indexLanguage);
        } else if (param === languageData.logButton[this.indexLanguage]) {
          changeModalContent('logIn', this.indexLanguage);
        } else if (param === '🔥') {
          changeModalContent('hotKeys', this.indexLanguage);
        } else {
          changeModalContent('setting', this.indexLanguage);
        }

      };
    });
  }

  addListenerForCloseModal() {
    const buttonModalClose = <HTMLButtonElement>document.querySelector('.main__modal__content__close');
    buttonModalClose.addEventListener('click', () => {
      modalClose();
    });
    window.addEventListener('click', () => {
      if (event.target === this.modal) {
        modalClose();
      }
    });
  }


}
