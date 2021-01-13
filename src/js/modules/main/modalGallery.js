import SwiperGalery from './addGalery';
import create from '../create';

export default class ModalGalery {
  constructor() {
    const parent = document.querySelector('.main__other-section__sub-content-block__galery-modal');
    this.button = create('button', 'main__other-section__sub-content-block__galery-modal__button', 'ROOMS', parent, ['id', 'myBtn']);

    this.modal = create('div', 'main__other-section__sub-content-block__galery-modal__modal',
      `<div class="main__other-section__sub-content-block__galery-modal__modal__content">
        <div class="main__other-section__sub-content-block__galery-modal__modal__content__header">
          <span class="main__other-section__sub-content-block__galery-modal__modal__content__close">&times;</span>
          <h2>List rooms in our hotel</h2>
        </div>
        <div class="main__other-section__sub-content-block__galery-modal__modal__content__body">
        </div>
      </div>`,
      parent, ['id', 'myModal']);
    this.modalOpenClose();
    this.addGaleryToModal();
  }

  modalOpenClose() {
    const modal = document.getElementById('myModal');
    const span = document.getElementsByClassName('main__other-section__sub-content-block__galery-modal__modal__content__close')[0];
    this.button.onclick = () => {
      /* modal.style.display = 'block'; */
      modal.style.bottom = '0px';
    };
    span.onclick = () => {
      /* modal.style.display = 'none'; */
      modal.style.bottom = '-100%';
    };
    window.onclick = (event) => {
      if (event.target === modal) {
        /* modal.style.display = 'none'; */
        modal.style.bottom = '-100%';
      }
    };
  }

  addGaleryToModal() {
    this.galery = new SwiperGalery();
  }
}
