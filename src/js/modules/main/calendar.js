import DateRangePicker from '../../../../node_modules/vanillajs-datepicker/js/DateRangePicker';
import create from '../create';
import '../../../../node_modules/vanillajs-datepicker/sass/datepicker.scss';

export default class Calendar {
  constructor() {
<<<<<<< HEAD
    const parent = document.getElementById('container__date');
=======
    const calendarContainer = document.getElementById('container__date');
>>>>>>> ee380fa355469889649d51e50dfc7c2a0ec51a33
    this.calendar = create('div', 'input-calendar',
      `<div id="foo">
        <input type="text" name="start">
        <span>to</span>
        <input type="text" name="end">
      </div>`,
<<<<<<< HEAD
      parent, ['id', 'f00']);
=======
      calendarContainer, ['id', 'f00']);
>>>>>>> ee380fa355469889649d51e50dfc7c2a0ec51a33
    this.initCalendar();
  }

  initCalendar() {
    this.elem = document.getElementById('foo');
    this.datepicker = new DateRangePicker(this.elem, {
<<<<<<< HEAD
      title: 'asdsad',
      datesDisabled: ['01/10/2021', '01/12/2021'],
      language: 'ru',
=======
      // ...options
>>>>>>> ee380fa355469889649d51e50dfc7c2a0ec51a33
    });
  }
}
