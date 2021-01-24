import create from './create';
import { setTheme, toggleTheme } from './utils';

export default class SwitcherColor {
  constructor() {
    const parent = document.querySelector('.header');
    this.containerSwitcher = create('div', 'container1',
      `<label id="switch" class="switch">
          <input class="color__switcher" type="checkbox" id="slider">
          <span class="slider round"></span>
       </label>`, parent);
    this.switcher = document.querySelector('.color__switcher');
    this.switcher.addEventListener('change', () => {
      toggleTheme();
    });

    (() => {
      if (localStorage.getItem('theme') === 'theme-dark') {
        setTheme('theme-dark');
        document.getElementById('slider').checked = false;
      } else {
        setTheme('theme-light');
        document.getElementById('slider').checked = true;
      }
    })();
  }
}
