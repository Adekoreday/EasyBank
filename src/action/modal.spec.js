import { openModal, closeModal } from './modal';
import { OPEN_MODAL } from '../actionTypes/actionTypes';

describe('Modal actions test', () => {
  it('opens modal', () => {
    const expectedAction = {
      type: OPEN_MODAL,
      data: true
    };
    const action = openModal();
    expect(action).toEqual(expectedAction);
  });
});
