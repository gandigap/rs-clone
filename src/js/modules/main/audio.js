import create from '../create';

export default class Audio {
  constructor() {
    this.parent = document.querySelector('.main');
    this.audio = create('audio', 'audio', null, this.parent, ['src', 'assets/sounds/whoosh.mp3']);
  }
}
