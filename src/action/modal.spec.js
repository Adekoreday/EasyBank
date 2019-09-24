import { openModal, closeModal } from './modal';
import { OPEN_MODAL, CLOSE_MODAL } from '../actionTypes/actionTypes';

describe('Modal actions test', () => {
  it('opens modal', () => {
    const expectedAction = {
      type: OPEN_MODAL,
      data: true
    };
    const action = openModal();
    expect(action).toEqual(expectedAction);
  });

  it('close modal', () => {
    const expectedAction = {
      type: CLOSE_MODAL,
      data: false
    };
    const action = closeModal();
    expect(action).toEqual(expectedAction);
  });
});
