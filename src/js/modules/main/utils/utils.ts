import languageData from '../../../languageDate/languageDate.json';
import ConfirmFormModal from '../modals/ConfirmFormModal';
import HotKeysModal from '../modals/HotKeysModal';
import SettingUserModal from '../modals/SettingUserModal';
import GalleryRoomsModal from '../modals/GalleryRoomsModal';

export const setTheme = (themeName) => {
  localStorage.setItem('theme', themeName);
  document.documentElement.className = themeName;
};

export const toggleTheme = () => {
  if (localStorage.getItem('theme') === 'theme-dark') {
    setTheme('theme-light');
  } else {
    setTheme('theme-dark');
  }
};

export function findNumberOpenTab() {
  let number = -1;
  const allTabs = document.querySelectorAll('.main__other-section__tabs__tabcontent');
  allTabs.forEach((element, index) => {
    if (element.classList.contains('tab__open')) {
      number = index;
    }
  });
  return number;
}

export function openTabAndChangeStep(numberTab) {
  const tabOpen = document.querySelector('.tab__open');
  const stepActive = document.querySelector('.tab__button-active');
  const allTabs = document.querySelectorAll('.main__other-section__tabs__tabcontent');
  const allSteps = document.querySelectorAll('.main__other-section__tabs__tab__button');
  tabOpen.classList.remove('tab__open');
  stepActive.classList.remove('tab__button-active');
  allTabs[numberTab].classList.add('tab__open');
  allSteps[numberTab].classList.add('tab__button-active');
}

export function checkButtonDisable(numberTab) {
  const buttonPrev = document.getElementById('button-prev-step');
  const buttonNext = document.getElementById('button-next-step');
  if (numberTab === 0) {
    buttonPrev.classList.add('button__disable');
  } else {
    buttonPrev.classList.remove('button__disable');
  }

  if (numberTab === 2) {
    buttonNext.classList.add('button__disable');
  } else {
    buttonNext.classList.remove('button__disable');
  }
}

export function changeLogButtonState(state, date, index) {
  if (state) {
    const buttonLog = document.querySelector('.header__container-button-log__button');
    console.log(buttonLog);
    buttonLog.classList.add('header__container-button-log__setting');
    buttonLog.textContent = `${date}`;
    buttonLog.classList.remove('header__container-button-log__button');
  } else {
    const buttonSet = document.querySelector('.header__container-button-log__setting');
    buttonSet.classList.add('header__container-button-log__button');
    buttonSet.classList.remove('header__container-button-log__setting');
    buttonSet.textContent = `${languageData.logButton[index]}`;
  }
}

export function modalClose() {
  const modal = <HTMLElement>document.querySelector('.main__modal');
  const audio = <HTMLAudioElement>document.querySelector('.audio');
  modal.style.bottom = '-100%';
  modal.innerHTML = '';
  audio.play();
  document.body.style.overflow = 'auto';
}

export function changeModalContent(contentType: string, index: number) {
  const modalHeaderTitle = document.querySelector('.main__modal__content__header-title');
  let modalContent = null;
  switch (contentType) {
    case 'gallery':
      modalHeaderTitle.innerHTML = `${languageData.modalTitle[0][index]}`;
      modalContent = new GalleryRoomsModal(index);
      break;
    case 'logIn':
      modalHeaderTitle.innerHTML = `${languageData.modalTitle[1][index]}`;
      modalContent = new ConfirmFormModal('logIn', index);
      break;
    case 'registration':
      modalContent = new ConfirmFormModal('registration', index);
      break;
    case 'hotKeys':
      modalHeaderTitle.innerHTML = `${languageData.modalTitle[2][index]}`;
      modalContent = new HotKeysModal(this.indexLanguage);
      break;
    case 'setting':
      this.modalHeaderTitle.innerHTML = `${languageData.modalTitle[3][index]}`;
      this.modalContent = new SettingUserModal(this.indexLanguage);
      break;
    default:
      break;
  }
}
