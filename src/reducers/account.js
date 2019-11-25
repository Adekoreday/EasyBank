import {
    GET_ALL_ACCOUNTS_REQUEST, GET_ALL_ACCOUNTS_FAILURE, GET_ALL_ACCOUNTS_SUCCESS
  } from '../actionTypes/actionTypes';
  
  const initialState = {
    allAccount: {},
    loading: false,
    isSuccess: false,
  };
  
  const account = (state = { ...initialState }, action) => {
    switch (action.type) {
        case GET_ALL_ACCOUNTS_REQUEST:
         return { ...state, loading: true, isSuccess: false };
        case GET_ALL_ACCOUNTS_FAILURE:
         return { ...state, loading: false, isSuccess: false };
        case GET_ALL_ACCOUNTS_SUCCESS:
          return { ...state, loading: false, isSuccess: true, allAccount: action.data};
      default:
        return state;
    }
  };
  
  export default account;
  