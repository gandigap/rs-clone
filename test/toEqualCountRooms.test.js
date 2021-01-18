import RadioButtonsForm from '../src/js/modules/main/radioButtonsForm';

it(('check value lan in hotel'), () => {
  const form = new RadioButtonsForm(0);
  expect(form.indexLanguage).toEqual(0);
});