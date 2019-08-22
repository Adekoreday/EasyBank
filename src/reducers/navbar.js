import { OPEN_NAVBAR, CLOSE_NAVBAR } from '../actionTypes/actionTypes';

const initialState = {
  navbarStatus: false,
};

const navbar = (state = { ...initialState }, action) => {
  switch (action.type) {
    case OPEN_NAVBAR:
      return { ...state, navbarStatus: true };
    case CLOSE_NAVBAR:
      return { ...state, navbarStatus: false };
    default:
      return state;
  }
};

export default navbar;
