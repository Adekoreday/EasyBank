import {
  CLOSE_MODAL, OPEN_MODAL,
  SIGNUP_CLOSE_MODAL,
  SIGNIN_CLOSE_MODAL,
  SIGNUP_OPEN_MODAL,
  SIGNIN_OPEN_MODAL,
  POST_MODAL_ACCOUNT
} from '../actionTypes/actionTypes';

const initialState = {
  modalStatus: false,
  signInmodalStatus: false,
  signUpmodalStatus: false,
  activateData: null
};

const modal = (state = { ...initialState }, action) => {
  switch (action.type) {
    case OPEN_MODAL:
      return { ...state, modalStatus: true };
    case CLOSE_MODAL:
      return { ...state, modalStatus: false };
    case SIGNUP_CLOSE_MODAL:
      return { ...state, signUpmodalStatus: false };
    case SIGNUP_OPEN_MODAL:
      return { ...state, signUpmodalStatus: true };
    case SIGNIN_CLOSE_MODAL:
      return { ...state, signInmodalStatus: false };
    case SIGNIN_OPEN_MODAL:
      return { ...state, signInmodalStatus: true };
    case POST_MODAL_ACCOUNT:
      return {...state, activateData: action.data}
    default:
      return state;
  }
};

export default modal;
