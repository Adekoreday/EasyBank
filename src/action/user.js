import axios from 'axios';
import * as types from '../actionTypes/actionTypes';

export const siginUser = details => async (dispatch) => {
  let data;
  try {
    const response = await axios.post('https://bankaandela.herokuapp.com/api/v1/auth/signin', details);
    data = response.data;
  } catch (e) {
    data = e.response === undefined ? { status: 599, msg: 'NETWORK ERROR' }
      : e.response.data;
  }
  dispatch({
    type: types.USER_SIGNIN,
    data
  });
};

export const userLoading = status => ({
  type: types.USER_LOADING,
  data: status
});

export const sigupUser = userdetails => async (dispatch) => {
  let data;
  try {
    const response = await axios.post('https://bankaandela.herokuapp.com/api/v1/auth/signup', userdetails);
    data = response.data;
  } catch (e) {
    data = e.response.data === undefined ? {status: 599, msg: 'NETWORK ERROR'} : e.response.data;
  }
  dispatch({
    type: types.USER_SIGNUP,
    data
  });
};

export const clearUserData = () => ({
  type: types.CLEAR_USER_DATA,
  data: {}
});
