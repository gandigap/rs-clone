import Litepicker from 'litepicker/dist/js/main';
import create from '../create';
import languageData from '../../languageDate/languageDate.json';

export default class Calendar {
  constructor(indexLanguage) {
    this.indexLanguage = indexLanguage;
    const parent = document.getElementById('container__date');
    this.calendar = create('input', 'new-input d-flex', null,
      parent, ['id', 'litepicker'], ['type', 'text'], ['placeholder', 'click'], ['tabindex', '10']);
    this.initCalendar();
  }

  initCalendar() {
    this.picker = new Litepicker({
      singleMode: false,
      element: document.getElementById('litepicker'),
      lang: `${languageData.langCalendar[this.indexLanguage]}`,
      lockDays: ['2021-01-05', '2021-01-07'],
    });
  }
}
