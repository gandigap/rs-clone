import RadioButtonsForm from '../src/js/modules/main/radioButtonsForm';

it(('check count rooms in hotel'), () => {
  const form = new RadioButtonsForm();
  expect(form.arrayTypeRooms).toHaveLength(5);
});