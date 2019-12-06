import asyncRequest from '../helpers/asyncRequest';
import * as types from '../actionTypes/actionTypes';
import {getFromStorage} from '../helpers/storage';


export const getTransaction = () => async (dispatch) => {
    let data;
    dispatch({ type: types.GET_ALL_TRANSACTION_REQUEST });
    try{
      const mail = getFromStorage('mail');
      const response = await asyncRequest('get', `/api/v1/user/${mail}/accounts`, null);
      const {data} = response.data
      dispatch({
        type: types.GET_ALL_TRANSACTION_SUCCESS,
        data
      });
    } catch (e) {
      data = e.response === undefined ? {status: 599, msg: 'NETWORK ERROR'} : e.response.data;
      dispatch({
        type: types.GET_ALL_TRANSACTION_FAILURE,
        data
      });
    }
  }