import asyncRequest from '../helpers/asyncRequest';
import axios from 'axios';
import * as types from '../actionTypes/actionTypes';
import {getFromStorage} from '../helpers/storage';


export const getUserDetails = () => async (dispatch) => {
  let data;
  dispatch({ type: types.FETCH_USER_DETAILS_REQUEST });
  try{
    const mail = getFromStorage('mail');
    const response = await asyncRequest('get', `/api/v1/user?mail=${mail}`, null);
    const data = response.data
    dispatch({
      type: types.FETCH_USER_DETAILS_SUCCESS,
      data
    });
  } catch (e) {
    data = e.response === undefined ? {status: 599, msg: 'NETWORK ERROR'} : e.response.data;
    dispatch({
      type: types.FETCH_USER_DETAILS_FAILURE,
      data
    });
  }
}

export const siginUser = details => async (dispatch) => {
  let data;
  try {
  const response = await asyncRequest('post', '/api/v1/auth/signin', details);
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
    data = e.response === undefined ? {status: 599, msg: 'NETWORK ERROR'} : e.response.data;
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
