import { toggleTheme } from './utilsTheme';

export default class HotKeysListener {
  constructor() {
    this.html = document.querySelector('html');
    this.switcher = document.querySelector('.color__switcher');
    this.coef = 1;
    this.keyButtonListeners();
  }

  keyButtonListeners() {
    this.enlargeFont();
    this.reduceFont();
    this.changeLightTheme();
    this.changeDarkTheme();
  }

  enlargeFont() {
    document.addEventListener('keydown', (event) => {
      if (event.code === 'KeyE' && (event.shiftKey || event.metaKey) && this.coef < 10) {
        this.coef += 1;
        this.html.style.fontSize = `1${this.coef}px`;
      }
    });
  }

  reduceFont() {
    document.addEventListener('keydown', (event) => {
      if (event.code === 'KeyQ' && (event.shiftKey || event.metaKey) && this.coef > 1) {
        this.coef -= 1;
        this.html.style.fontSize = `1${this.coef}px`;
      }
    });
  }

  changeLightTheme() {
    document.addEventListener('keydown', (event) => {
      if (event.code === 'KeyR' && (event.shiftKey || event.metaKey)) {
        if (!this.switcher.checked) {
          this.switcher.checked = true;
          toggleTheme();
        }
      }
    });
  }

  changeDarkTheme() {
    document.addEventListener('keydown', (event) => {
      if (event.code === 'KeyT' && (event.shiftKey || event.metaKey)) {
        if (this.switcher.checked) {
          this.switcher.checked = false;
          toggleTheme();
        }
      }
    });
  }
}
