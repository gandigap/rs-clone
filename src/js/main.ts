interface Window {
  main: any;
}

class Main {
  constructor() {
    console.log('Hello from JavaScript!');
  }
}

const main = new Main();
window.main = main;
