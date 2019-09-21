import * as types from '../actionTypes/actionTypes';

export const openModal = () => ({
  type: types.OPEN_MODAL,
  data: true
});

export const closeModal = () => ({
  type: types.CLOSE_MODAL,
  data: false
});

export const signInCloseModal = () => ({
  type: types.SIGNIN_CLOSE_MODAL,
  data: false
});

export const signUpCloseModal = () => ({
  type: types.SIGNUP_CLOSE_MODAL,
  data: false
});

export const signUpOpenModal = () => ({
  type: types.SIGNUP_OPEN_MODAL,
  data: true
});

export const signInOpenModal = () => ({
  type: types.SIGNIN_OPEN_MODAL,
  data: true
});
