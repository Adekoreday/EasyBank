import asyncRequest from '../helpers/asyncRequest';
import * as types from '../actionTypes/actionTypes';
import { getFromStorage } from '../helpers/storage';


export const getAllAccount = () => async (dispatch) => {
  let data;
  dispatch({ type: types.GET_ALL_ACCOUNTS_REQUEST });
  try {
    const mail = getFromStorage('mail');
    const response = await asyncRequest('get', `/api/v1/user/${mail}/accounts`, null);
    const { data } = response.data;
    dispatch({
      type: types.GET_ALL_ACCOUNTS_SUCCESS,
      data
    });
  } catch (e) {
    data = e.response === undefined ? { status: 599, msg: 'NETWORK ERROR' } : e.response.data;
    dispatch({
      type: types.GET_ALL_ACCOUNTS_FAILURE,
      data
    });
  }
};

export const getAllUsersAccount = () => async (dispatch) => {
  let data;
  dispatch({ type: types.GET_ALL_USERS_ACCOUNTS_REQUEST });
  try {
    const response = await asyncRequest('get', '/api/v1/accounts', null);
    const { data } = response.data;
    dispatch({
      type: types.GET_ALL_USERS_ACCOUNTS_SUCCESS,
      data
    });
  } catch (e) {
    data = e.response === undefined ? { status: 599, msg: 'NETWORK ERROR' } : e.response.data;
    dispatch({
      type: types.GET_ALL_USERS_ACCOUNTS_FAILURE,
      data
    });
  }
};


export const createAccounts = (details) => async (dispatch) => {
  let data;
  dispatch({ type: types.CREATE_ACCOUNTS_REQUEST });
  try {
    const response = await asyncRequest('post', '/api/v1/account', details);
    const { data } = response;
    dispatch({
      type: types.CREATE_ACCOUNTS_SUCCESS,
      data
    });
  } catch (e) {
    data = e.response === undefined ? { status: 599, msg: 'NETWORK ERROR' } : e.response.data;
    dispatch({
      type: types.CREATE_ACCOUNTS_FAILURE,
      data
    });
  }
};


export const getAccountTransactions = () => async (dispatch) => {
  let data;
  dispatch({ type: types.GET_ACCOUNT_REQUEST });
  try {
    const response = await asyncRequest('get', '/api/v1/transactions', null);
    const { data } = response;
    dispatch({
      type: types.GET_ACCOUNT_SUCCESS,
      data: data.Data
    });
  } catch (e) {
    data = e.response === undefined ? { status: 599, msg: 'NETWORK ERROR' } : e.response.data;
    dispatch({
      type: types.GET_ACCOUNT_FAILURE,
      data
    });
  }
};

export const activateAccount = ({ accountNumber, status }) => async (dispatch) => {
  const details = {
    status: (status == 'active') ? 'draft' : 'active',
  };
  dispatch({ type: types.ACTIVATE_ACCOUNT_REQUEST });
  let data;
  try {
    const response = await asyncRequest('patch', `/api/v1/account/${accountNumber}`, details);
    data = {
      status: response.data.data.status,
      accountNumber
    };
    dispatch({ type: types.ACTIVATE_ACCOUNT_SUCCESS, data });
  } catch (e) {
    data = e.response === undefined ? { status: 599, msg: 'NETWORK ERROR' } : e.response.data;
    dispatch({
      type: types.ACTIVATE_ACCOUNT_FAILURE,
      data
    });
  }
};

export const reportActivateModalDetails = ({ status, accountNumber }) => ({
  type: types.POST_MODAL_ACCOUNT,
  data: { status, accountNumber }
});
