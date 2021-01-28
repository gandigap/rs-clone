import Litepicker from 'litepicker/dist/js/main';
import create from '../utils/create';
import languageData from '../../../languageDate/languageDate.json';

export default class Calendar {
    constructor(lockDays, indexLanguage) {
        this.lockDays = lockDays;
        this.indexLanguage = indexLanguage;
        const parent = document.getElementById('container__date');
        this.calendar = create('input', 'new-input d-flex', null,
            parent, ['id', 'litepicker'], ['type', 'text'], ['placeholder', 'click'], ['tabindex', '10']);
        this.getCurrentDate();
        this.initCalendar();
    }

    initCalendar() {
        this.picker = new Litepicker({
            singleMode: false,
            element: document.getElementById('litepicker'),
            lang: `${languageData.langCalendar[this.indexLanguage]}`,
            lockDays: [
                ['2020-01-01', `${this.today}`], '2021-01-30', this.lockDays,
            ],
        });
    }

    getCurrentDate() {
        this.today = new Date();
        const dd = String(this.today.getDate()).padStart(2, '0');
        const mm = String(this.today.getMonth() + 1).padStart(2, '0');
        const yyyy = this.today.getFullYear();
        this.today = `${yyyy}-${mm}-${dd}`;
    }
}