import create from '../utils/create';
import languageData from '../../../languageDate/languageDate.json';
import { addListenerForCloseModal } from '../utils/utils';
import { AccountManager } from '../../firebase/accountManager';

export default class StaticticModal {
    indexLanguage: number;
    accountManager: AccountManager;
    contentModal: any;
    dialogContent: any;
    languageData: string[][];

    constructor(indexLanguage) {
        this.indexLanguage = indexLanguage;
        this.accountManager = new AccountManager(this.indexLanguage);
        const parent = document.querySelector('.main__modal__content__body');
        this.languageData = languageData.dialogInfo[this.indexLanguage];
        this.contentModal = create('div', 'container__statictics',
            `<div class="container__statictics__tables"></div>`,
            parent);
        addListenerForCloseModal();
        this.addStatisticTable('gender', [20, 30, 50]);
        this.addStatisticTable('age', [10, 10, 80]);
        this.addStatisticTable('income', [40, 40, 20]);

    }

    addStatisticTable(type: string, date: number[]) {
        let typeIndex = null;
        switch (type) {
            case 'gender':
                typeIndex = 0;
                break;
            case 'age':
                typeIndex = 1;
                break;
            case 'income':
                typeIndex = 2;
                break;
            default:
                break;
        }
        const statisticTablesContainer = create('table', 'container__statictics__tables__table',
            `<thead class="container__statictics__tables__table__thead">
                <tr class="container__statictics__tables__table__thead__tr">
                    <th class="container__statictics__tables__table__thead__th">${this.languageData[0][typeIndex]}</th>
                    <th class="container__statictics__tables__table__thead__th">%</th>
                </tr>
            </thead>
            <tbody class="container__statictics__tables__table__tbody">
                <tr class="container__statictics__tables__table__tbody__tr">
                    <td class="container__statictics__tables__table__tbody__td">${this.languageData[2][typeIndex]}</td>
                    <td class="container__statictics__tables__table__tbody__td">${date[0]}</td>
                </tr>
                <tr class="container__statictics__tables__table__tbody__tr">
                    <td class="container__statictics__tables__table__tbody__td">${this.languageData[3][typeIndex]}</td>
                    <td class="container__statictics__tables__table__tbody__td">${date[1]}</td>
                </tr>
                <tr class="container__statictics__tables__table__tbody__tr">
                    <td class="container__statictics__tables__table__tbody__td">${this.languageData[4][typeIndex]}</td>
                    <td class="container__statictics__tables__table__tbody__td">${date[2]}</td>
                </tr>
            </tbody>`,
            this.contentModal);

    }

}
