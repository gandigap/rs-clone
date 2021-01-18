import languageData from '../languageDate/languageDate.json';
import MainPart from './main/mainPart';
import FooterPart from './footer/footerPart';
import BurgerMenu from './header/burgerMenu';

export default function changeLanguage() {
  const selectElement = document.getElementById('select__language');

  selectElement.addEventListener('change', (event) => {
    let main = document.querySelector('.main');
    let footer = document.querySelector('.footer');
    let burgerMenu = document.querySelector('.hamburger-menu');
    const logButton = document.querySelector('#button-open-confirm-form');
    const language = ['EN', 'RU', 'DE'];
    const index = language.indexOf(event.target.value);
    logButton.textContent = `${languageData.logButton[index]}`;
    main.remove();
    footer.remove();
    burgerMenu.remove();
    main = new MainPart(index);
    footer = new FooterPart();
    burgerMenu = new BurgerMenu(index);
  });
}
