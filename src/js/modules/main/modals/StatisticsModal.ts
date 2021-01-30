import create from '../utils/create';
import languageData from '../../../languageDate/languageDate.json';
import { addListenerForCloseModal } from '../utils/utils';
import { AccountManager } from '../../firebase/accountManager';

export default class StaticticModal {
    indexLanguage: number;
    accountManager: AccountManager;
    languageData: { staticticsContent: string[]; };
    contentModal: any;


    dialogContent: any;
    constructor(indexLanguage) {
        this.indexLanguage = indexLanguage;
        this.accountManager = new AccountManager(this.indexLanguage);
        const parent = document.querySelector('.main__modal__content__body');
        this.languageData = languageData.staticticsModal[this.indexLanguage];
        this.contentModal = create('div', 'container__statictics',
            `example`,
            parent);
        addListenerForCloseModal();
    }
}
