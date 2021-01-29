import create from '../utils/create';
import ConfirmFormModal from './ConfirmFormModal';
import GalleryRoomsModal from './GalleryRoomsModal';
import HotKeysModal from './HotKeysModal';
import languageData from '../../../languageDate/languageDate.json';
import SettingUserModal from './SettingUserModal';

export default class Modal {
  modalContent: any;
  gallery: GalleryRoomsModal;
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
    this.audio = document.querySelector('.audio');
    buttonsWhichOpenModal.forEach((button: HTMLButtonElement) => {
      button.onclick = () => {
        document.body.style.overflow = 'hidden';
        const param = button.textContent;
        this.modal.innerHTML = `<div class="main__modal__content">
                                    <div class="main__modal__content__header d-flex justify-content-between">
                                      <span class="main__modal__content__close">&times;</span>
                                      <h2 class="main__modal__content__header-title"></h2>
                                    </div>
                                    <div class="main__modal__content__body">
                                    </div>
                                  </div>`;
        this.modalClose();
        this.modalHeaderTitle = document.querySelector('.main__modal__content__header-title');
        if (param === languageData.galleryButton[this.indexLanguage]) {
          this.changeModalContent('gallery');
        } else if (param === languageData.logButton[this.indexLanguage]) {
          this.changeModalContent('logIn');
        } else if (param === '🔥') {
          this.changeModalContent('hotKeys');
        } else {
          this.changeModalContent('setting');
        }
        this.audio.play();
        this.modal.style.bottom = '0px';
      };
    });
  }

    modalClose() {
        this.span = document.querySelector('.main__modal__content__close');
        this.span.onclick = () => {
            this.modal.style.bottom = '-100%';
            this.modal.innerHTML = '';
            this.audio.play();
            document.body.style.overflow = 'auto';
        };
        window.onclick = (event) => {
            if (event.target === this.modal) {
                this.modal.style.bottom = '-100%';
                this.modal.innerHTML = '';
                this.audio.play();
                document.body.style.overflow = 'auto';
            }
        };
    }

   changeModalContent(contentType:string) {
     switch (contentType) {
      case 'gallery':
        this.modalHeaderTitle.innerHTML = `${languageData.modalTitle[0][this.indexLanguage]}`;
        this.modalContent = new GalleryRoomsModal(this.indexLanguage);
        break;
      case 'logIn':
        this.modalHeaderTitle.innerHTML = `${languageData.modalTitle[1][this.indexLanguage]}`;
        this.modalContent = new ConfirmFormModal('logIn', this.indexLanguage);  
        break;
      case 'registration':
        this.modalContent = new ConfirmFormModal('registration', this.indexLanguage); 
        break;
      case 'hotKeys':
        this.modalHeaderTitle.innerHTML = `${languageData.modalTitle[2][this.indexLanguage]}`;
        this.modalContent = new HotKeysModal(this.indexLanguage);
        break;
      case 'setting':
        this.modalHeaderTitle.innerHTML = `${languageData.modalTitle[3][this.indexLanguage]}`;
        this.modalContent = new SettingUserModal(this.indexLanguage);
         break;
      default:
         break;
     }
  }
}
