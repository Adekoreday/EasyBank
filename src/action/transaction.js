import asyncRequest from '../helpers/asyncRequest';
import * as types from '../actionTypes/actionTypes';
import { getFromStorage } from '../helpers/storage';


export const getTransaction = () => async (dispatch) => {
  let data;
  dispatch({ type: types.GET_ALL_TRANSACTION_REQUEST });
  try {
    const mail = getFromStorage('mail');
    const response = await asyncRequest('get', `/api/v1/user/${mail}/accounts`, null);
    const { data } = response.data;
    dispatch({
      type: types.GET_ALL_TRANSACTION_SUCCESS,
      data
    });
  } catch (e) {
    data = e.response === undefined ? { status: 599, msg: 'NETWORK ERROR' } : e.response.data;
    dispatch({
      type: types.GET_ALL_TRANSACTION_FAILURE,
      data
    });
  }
};

export const postTransact = (details, accountnumber, transactionType) => async (dispatch) => {
  let data;
  dispatch({ type: types.POST_TRANSACTION_REQUEST });
  try {
    const response = await asyncRequest('post', `/api/v1/transactions/${accountnumber}/${transactionType}`, details);
    const { data } = response.data;
    dispatch({
      type: types.POST_TRANSACTION_SUCCESS,
      data
    });
  } catch (e) {
    data = e.response === undefined ? { status: 599, msg: 'NETWORK ERROR' } : e.response.data;
    dispatch({
      type: types.POST_TRANSACTION_FAILURE,
      data
    });
  }
};

export const getAllTransactions = () => async (dispatch) => {
  let data;
  dispatch({ type: types.GET_ALL_TRANSACTIONS_REQUEST });
  try {
    const response = await asyncRequest('get', '/api/v1/transaction');
    data = response.data;
    dispatch({
      type: types.GET_ALL_TRANSACTIONS_SUCCESS,
      data
    });
  } catch (e) {
    dispatch({
      type: types.GET_ALL_TRANSACTIONS_FAILURE,
      data
    });
  }
};

