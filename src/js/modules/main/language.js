import data from './language.json';

export default class Language {
  constructor() {
    this.parent = document.getElementById('container__confirm');
    console.log(data.name);
  }
}
