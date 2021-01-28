import Litepicker from 'litepicker/dist/js/main';
import create from '../utils/create';
import languageData from '../../../languageDate/languageDate.json';

export default class Calendar {
    lockDays: Array<Array<String>>;
    indexLanguage: any;
    calendar: any;
    picker: any;
    today: any;
    constructor(indexLanguage, lockDays) {
        this.indexLanguage = indexLanguage;
        this.lockDays = lockDays;
        const parent = document.getElementById('container__date');
        this.calendar = create('div', 'container__date__content', 
    '<input type="text" class="new-input d-flex" id="litepicker" placeholder="click" tabindex="10">',
      parent);
        this.getCurrentDate();
        this.initCalendar();
    }

    initCalendar() {
        this.picker = new Litepicker({
            singleMode: false,
            element: document.getElementById('litepicker'),
            lang: `${languageData.langCalendar[this.indexLanguage]}`,
        });
       this.setLockedDays();
    }
    setLockedDays() {
      if (this.lockDays) {
            const past = ['2020-01-01', `${this.today}`]
            this.lockDays.push(past)
            this.picker.setLockDays(this.lockDays)
        }
    }    
    getCurrentDate() {
        this.today = new Date();
        const dd = String(this.today.getDate()).padStart(2, '0');
        const mm = String(this.today.getMonth() + 1).padStart(2, '0');
        const yyyy = this.today.getFullYear();
        this.today = `${yyyy}-${mm}-${dd}`;
    }
}
