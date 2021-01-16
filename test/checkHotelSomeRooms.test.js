import RadioButtonsForm from '../src/js/modules/main/radioButtonsForm';

describe('hotel contain some rooms', () => {
  const form = new RadioButtonsForm();
  const expected = ['Quade room', 'Double room'];
  it('matches even if received contains additional elements', () => {
    expect(form.arrayTypeRooms).toEqual(expect.arrayContaining(expected));
  });
});