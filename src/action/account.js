import asyncRequest from '../helpers/asyncRequest';
import * as types from '../actionTypes/actionTypes';
import {getFromStorage} from '../helpers/storage';


export const getAllAccount = () => async (dispatch) => {
    let data;
    dispatch({ type: types.GET_ALL_ACCOUNTS_REQUEST });
    try{
      const mail = getFromStorage('mail');
      const response = await asyncRequest('get', `/api/v1/user/${mail}/accounts`, null);
      const {data} = response.data
      dispatch({
        type: types.GET_ALL_ACCOUNTS_SUCCESS,
        data
      });
    } catch (e) {
      console.log(e), "the error is ";
      data = e.response === undefined ? {status: 599, msg: 'NETWORK ERROR'} : e.response.data;
      dispatch({
        type: types.GET_ALL_ACCOUNTS_FAILURE,
        data
      });
    }
  }