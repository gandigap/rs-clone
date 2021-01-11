/* eslint-disable no-undef */
import create from '../create';
import '../mobiscroll.javascript.min';
import '../../../assets/css/mobiscroll.javascript.min.css';

export default class Calendar {
  constructor() {
    const calendarContainer = document.getElementById('container__date');
    this.calendar = create('div', 'calendar', '<div id="range"></div>', calendarContainer);
    this.initMobiscroll();
  }

  initMobiscroll() {
    console.log(this.calendar);
    mobiscroll.datepicker('#range', {
      select: 'range',
      display: 'inline',
    });
  }
}
