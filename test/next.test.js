import RadioButtonsForm from '../src/js/modules/main/radioButtonsForm';

it(('check equal number with commas'), () => {
  const form = new RadioButtonsForm();
  expect(form.arrayTypeRooms.length).toEqual(5);
});