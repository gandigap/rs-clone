import create from './create';

export default class ModalGalery {
  constructor() {
    const galeryModal = document.querySelector('.main__other-section__sub-content-block__galery-modal');
    this.button = create('button', 'main__other-section__sub-content-block__galery-modal__button', 'Open', galeryModal, ['id', 'myBtn']);
    this.modal = create('div', 'main__other-section__sub-content-block__galery-modal__modal',
      `<div class="modal-header">
        <span class="close">&times;</span>
        <h2>Modal Header</h2>
      </div>
      <div class="modal-body">
        <p>Some text in the Modal Body</p>
        <p>Some other text...</p>
      </div>
      <div class="modal-footer">
        <h3>Modal Footer</h3>
      </div>`,
      galeryModal, ['id', 'myModal']);
    this.workWithModal();
  }

  workWithModal() {
    var modal = document.getElementById("myModal");
// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
  }
}
