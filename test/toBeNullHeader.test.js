import App from '../src/js/modules/app';

it(('check header when app create'), () => {
  const app = new App(1);
  expect(app.header).toBeNull();
});