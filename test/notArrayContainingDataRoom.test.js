import RadioButtonsForm from '../src/js/modules/main/radioButtonsForm';

describe('check contain super rooms in hotel', () => {
  const form = new RadioButtonsForm(0);
  const expected = ['Super room'];
  it('does not match if received does not contain expected elements', () => {
    expect(form.arrayTypeRooms).not.toEqual(expect.arrayContaining(expected));
  });
});