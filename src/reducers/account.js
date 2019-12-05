import {
    GET_ALL_ACCOUNTS_REQUEST, GET_ALL_ACCOUNTS_FAILURE, GET_ALL_ACCOUNTS_SUCCESS, CREATE_ACCOUNTS_REQUEST, CREATE_ACCOUNTS_SUCCESS, CREATE_ACCOUNTS_FAILURE
  } from '../actionTypes/actionTypes';
  
  const initialState = {
    allAccount: {},
    isfailedAllAccount: {},
    isfailedCreateAccount: {},
    createdAccount: {},
    loading: false,
    isSuccess: false,
    isSucessCreateAccount: false
  };
  
  const account = (state = { ...initialState }, action) => {
    switch (action.type) {
         case GET_ALL_ACCOUNTS_REQUEST:
         return { ...state, loading: true, isSuccess: false, allAccount: {}, isfailedAllAccount: {} };
         case CREATE_ACCOUNTS_REQUEST:
          return { ...state, loading: true, isSucessCreateAccount: false , createdAccount: {}, isfailedCreateAccount: {}};
         case GET_ALL_ACCOUNTS_FAILURE:
         return { ...state, loading: false, isSuccess: false, isfailedAllAccount: action.data };
         case CREATE_ACCOUNTS_FAILURE:
          return { ...state, loading: false, isfailedCreateAccount: action.data, isSucessCreateAccount: false};
         case GET_ALL_ACCOUNTS_SUCCESS:
          return { ...state, loading: false, isSuccess: true, allAccount: action.data};
         case CREATE_ACCOUNTS_SUCCESS:
          return { ...state, loading: false, isSucessCreateAccount: true, createdAccount: action.data};
      default:
        return state;
    }
  };
  
  export default account;
  