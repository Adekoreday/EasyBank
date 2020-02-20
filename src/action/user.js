import asyncRequest from '../helpers/asyncRequest';
import * as types from '../actionTypes/actionTypes';
import { getFromStorage } from '../helpers/storage';


export const getUserDetails = () => async (dispatch) => {
  let data;
  dispatch({ type: types.FETCH_USER_DETAILS_REQUEST });
  try {
    const mail = getFromStorage('mail');
    const response = await asyncRequest('get', `/api/v1/user?mail=${mail}`, null);
    const data = response.data;
    dispatch({
      type: types.FETCH_USER_DETAILS_SUCCESS,
      data
    });
  } catch (e) {
    data = e.response === undefined ? { status: 599, msg: 'NETWORK ERROR' } : e.response.data;
    dispatch({
      type: types.FETCH_USER_DETAILS_FAILURE,
      data
    });
  }
};

export const siginUser = (details) => async (dispatch) => {
  let data;
  dispatch({ type: types.USER_SIGNIN_REQUEST });
  try {
    const response = await asyncRequest('post', '/api/v1/auth/signin', details);
    data = response.data;
    dispatch({
      type: types.USER_SIGNIN_SUCCESS,
      data
    });
  } catch (e) {
    data = e.response === undefined ? { status: 599, msg: 'NETWORK ERROR' }
      : e.response.data;
    dispatch({
      type: types.USER_SIGNIN_FAILURE,
      data
    });
  }
};

export const sigupUser = (userdetails) => async (dispatch) => {
  let data;
  dispatch({ type: types.USER_SIGNUP_REQUEST });
  try {
    const response = await asyncRequest('post', '/api/v1/auth/signup', userdetails);
    data = response.data;
    dispatch({
      type: types.USER_SIGNUP_SUCCESS,
      data
    });
  } catch (e) {
    dispatch({
      type: types.USER_SIGNUP_FAILURE,
      data
    });
  }
};

export const getAllUsers = () => async (dispatch) => {
  let data;
  dispatch({ type: types.GET_ALL_USERS_REQUEST });
  try {
    const response = await asyncRequest('get', '/api/v1/users');
    data = response.data;
    dispatch({
      type: types.GET_ALL_USERS_SUCCESS,
      data
    });
  } catch (e) {
    dispatch({
      type: types.GET_ALL_USERS_FAILURE,
      data
    });
  }
};


export const clearUserData = () => ({
  type: types.CLEAR_USER_DATA,
});
