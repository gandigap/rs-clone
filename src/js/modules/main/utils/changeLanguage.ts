import languageData from '../../../languageDate/languageDate.json';
import MainPart from '../MainPart';
import FooterPart from '../../footer/FooterPart';
import BurgerMenu from '../../header/BurgerMenu';
import { changeLogButtonState } from '../utils/utils';
import { AccountManager } from '../../firebase/accountManager';

export default function changeLanguage() {
  const selectElement = document.getElementById('select__language');


  selectElement.addEventListener('change', (event: any) => {
    let main: any = document.querySelector('.main');
    let footer: any = document.querySelector('.footer');
    let burgerMenu: any = document.querySelector('.hamburger-menu');
    const logButton = document.querySelector('#button-open-confirm-form');
    const language = ['EN', 'RU', 'DE'];
    const index = language.indexOf(event.target.value);
    /* const accountManager = new AccountManager(index); */
    /* let name = accountManager.getUserName(); */
    if (logButton.textContent === languageData.logButton[0]
      || logButton.textContent === languageData.logButton[1]
      || logButton.textContent === languageData.logButton[2]) {
      logButton.textContent = `${languageData.logButton[index]}`;
    }
    main.remove();
    footer.remove();
    burgerMenu.remove();
    main = new MainPart(index);
    footer = new FooterPart();
    burgerMenu = new BurgerMenu(index);
    /* changeLogButtonState(true, name, index); */
  });
}
