import Modal from '../src/js/modules/main/createModal';

it(('check header when app create'), () => {
  const modal = new Modal(1);
  expect(modal.indexLanguage).not.toBeNull();
});