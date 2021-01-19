export default class HotKeysListener {
  constructor() {
    this.html = document.querySelector('html');
    this.coef = 1;
    this.keyButtonListeners();
  }

  keyButtonListeners() {
    this.enlargeFont();
    this.reduceFont();
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

    /* document.onkeyup = function(e) {
      if (e.which == 77) {
        alert("M key was pressed");
      } else if (e.ctrlKey && e.which == 66) {
        alert("Ctrl + B shortcut combination was pressed");
      } else if (e.ctrlKey && e.altKey && e.which == 89) {
        alert("Ctrl + Alt + Y shortcut combination was pressed");
      } else if (e.ctrlKey && e.altKey && e.shiftKey && e.which == 85) {
        alert("Ctrl + Alt + Shift + U shortcut combination was pressed");
      }
    }; */
  }
}
