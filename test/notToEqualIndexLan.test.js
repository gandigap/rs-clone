import RadioButtonsForm from '../src/js/modules/main/radioButtonsForm';

it(('check value lan in hotel'), () => {
  const form = new RadioButtonsForm(2);
  expect(form.indexLanguage).not.toEqual(1);
});