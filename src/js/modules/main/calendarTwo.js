import Litepicker from '../../../../node_modules/litepicker/dist/js/main';
import '../../../../node_modules/litepicker/dist/css/style.css';
import create from '../create';

export default class CalendarTwo {
  constructor() {
    const parent = document.getElementById('container__date');
    this.calendar = create('input', 'new-input', null,
      parent, ['id', 'litepicker'], ['type', 'text']);
    this.initCalendar();
  }

  initCalendar() {
    this.picker = new Litepicker({
      singleMode: false,
      element: document.getElementById('litepicker'),
      lang: 'ru-RU',
      lockDays: ['2021-01-05', '2021-01-07'],
    });
  }

  /* https://wakirin.github.io/Lightpick/#methods
  https://www.cssscript.com/vanilla-date-range-picker/ */
}
