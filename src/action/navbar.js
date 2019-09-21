import * as types from '../actionTypes/actionTypes';

export const openNavbar = () => ({
  type: types.OPEN_NAVBAR,
  data: true
});

export const closeNavbar = () => ({
  type: types.CLOSE_NAVBAR,
  data: false
});
