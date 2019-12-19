import {
    GET_ALL_ACCOUNTS_REQUEST, GET_ALL_ACCOUNTS_FAILURE, GET_ALL_ACCOUNTS_SUCCESS, CREATE_ACCOUNTS_REQUEST, CREATE_ACCOUNTS_SUCCESS, CREATE_ACCOUNTS_FAILURE, GET_ACCOUNT_REQUEST, GET_ACCOUNT_SUCCESS, GET_ACCOUNT_FAILURE
  } from '../actionTypes/actionTypes';
  
  const initialState = {
    allAccount: {},
    accountTransaction: [],
    isfailedAllAccount: {},
    isfailedCreateAccount: {},
    createdAccount: {},
    loading: false,
    getAccountLoading: false,
    createAccountloading: false,
    isfailedGetAccountTransaction: {},
    isSuccess: false,
    isSucessCreateAccount: false
  };
  
  const account = (state = { ...initialState }, action) => {
    switch (action.type) {
         case GET_ALL_ACCOUNTS_REQUEST:
         return { ...state, loading: true, isSuccess: false, allAccount: {}, isfailedAllAccount: {} };
         case CREATE_ACCOUNTS_REQUEST:
          return { ...state, createAccountloading: true, isSucessCreateAccount: false , createdAccount: {}, isfailedCreateAccount: {}};
         case GET_ALL_ACCOUNTS_FAILURE:
         return { ...state, loading: false, isSuccess: false, isfailedAllAccount: action.data };
         case CREATE_ACCOUNTS_FAILURE:
          return { ...state, createAccountloading: false, isfailedCreateAccount: action.data, isSucessCreateAccount: false};
         case GET_ALL_ACCOUNTS_SUCCESS:
          return { ...state, loading: false, isSuccess: true, allAccount: action.data};
         case CREATE_ACCOUNTS_SUCCESS:
          return { ...state, createAccountloading: false, isSucessCreateAccount: true, createdAccount: action.data};
         case GET_ACCOUNT_REQUEST:
           return {...state, getAccountLoading: true,   accountTransaction: []}
         case GET_ACCOUNT_SUCCESS:
          return {...state, accountTransaction: action.data, getAccountLoading: false}
        case GET_ACCOUNT_FAILURE: 
          return {...state, getAccountLoading: false, isfailedGetAccountTransaction: action.data }
      default:
        return state;
    }
  };
  
  export default account;
  