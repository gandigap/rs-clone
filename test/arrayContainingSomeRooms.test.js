import RadioButtonsForm from '../src/js/modules/main/radioButtonsForm';

describe('check contain some rooms in hotel', () => {
  const form = new RadioButtonsForm(0);
  const expected = ['Quade room', 'Double room'];
  it('matches even if received contains additional elements', () => {
    expect(form.arrayTypeRooms).toEqual(expect.arrayContaining(expected));
  });
});