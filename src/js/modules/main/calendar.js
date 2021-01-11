import DateRangePicker from '../../../../node_modules/vanillajs-datepicker/js/DateRangePicker';
import create from '../create';
import '../../../../node_modules/vanillajs-datepicker/sass/datepicker.scss';

export default class Calendar {
  constructor() {
    const calendarContainer = document.getElementById('container__date');
    this.calendar = create('div', 'input-calendar',
      `<div id="foo">
        <input type="text" name="start">
        <span>to</span>
        <input type="text" name="end">
      </div>`,
      calendarContainer, ['id', 'f00']);
    this.initCalendar();
  }

  initCalendar() {
    this.elem = document.getElementById('foo');
    this.datepicker = new DateRangePicker(this.elem, {
      // ...options
    });
  }
}
