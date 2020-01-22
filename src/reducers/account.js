import {
    GET_ALL_ACCOUNTS_REQUEST, GET_ALL_ACCOUNTS_FAILURE, GET_ALL_ACCOUNTS_SUCCESS, CREATE_ACCOUNTS_REQUEST, CREATE_ACCOUNTS_SUCCESS,
    CREATE_ACCOUNTS_FAILURE, GET_ACCOUNT_REQUEST, GET_ACCOUNT_SUCCESS, GET_ACCOUNT_FAILURE, GET_ALL_USERS_ACCOUNTS_REQUEST, GET_ALL_USERS_ACCOUNTS_FAILURE,
    GET_ALL_USERS_ACCOUNTS_SUCCESS, ACTIVATE_ACCOUNT_FAILURE, ACTIVATE_ACCOUNT_REQUEST, ACTIVATE_ACCOUNT_SUCCESS
  } from '../actionTypes/actionTypes';
  
  const initialState = {
    activateAccount: null,
    isactivateAccountFailed: null,
    isactivateAccountSucess: false,
    activateAccountLoading: false,
    allUsersAccount: [],
    isfailedAllUsersAccounts: {},
    isallUserAccountLoading: false,
    isSuccessAllUsersAccount: false,
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
         case GET_ALL_ACCOUNTS_FAILURE:
          return { ...state, loading: false, isSuccess: false, isfailedAllAccount: action.data };
         case GET_ALL_ACCOUNTS_SUCCESS:
            return { ...state, loading: false, isSuccess: true, allAccount: action.data};
         case CREATE_ACCOUNTS_REQUEST:
          return { ...state, createAccountloading: true, isSucessCreateAccount: false , createdAccount: {}, isfailedCreateAccount: {}};
         case CREATE_ACCOUNTS_FAILURE:
          return { ...state, createAccountloading: false, isfailedCreateAccount: action.data, isSucessCreateAccount: false};
         case CREATE_ACCOUNTS_SUCCESS:
          return { ...state, createAccountloading: false, isSucessCreateAccount: true, createdAccount: action.data};
         case GET_ACCOUNT_REQUEST:
           return {...state, getAccountLoading: true,   accountTransaction: []};
         case GET_ACCOUNT_FAILURE: 
          return {...state, getAccountLoading: false, isfailedGetAccountTransaction: action.data };
         case GET_ACCOUNT_SUCCESS:
            return {...state, accountTransaction: action.data, getAccountLoading: false};
         case GET_ALL_USERS_ACCOUNTS_REQUEST:
         return { ...state, isallUserAccountLoading: true, isSuccessAllUsersAccount: false, allUsersAccount: [], isfailedAllUsersAccounts: {} };
         case GET_ALL_USERS_ACCOUNTS_FAILURE:
          return { ...state, isallUserAccountLoading: false, isSuccessAllUsersAccount: false, isfailedAllUsersAccounts: action.data };
         case GET_ALL_USERS_ACCOUNTS_SUCCESS:
            return { ...state, isallUserAccountLoading: false, isSuccessAllUsersAccount: true, allUsersAccount: action.data};
         case ACTIVATE_ACCOUNT_REQUEST: 
            return {...state, activateAccountLoading: true, isactivateAccountSucess:false, activateAccount: null, isactivateAccountFailed: null};
         case ACTIVATE_ACCOUNT_SUCCESS:
            return {...state, activateAccountLoading: false, isactivateAccountSucess:true, activateAccount: action.data};
         case ACTIVATE_ACCOUNT_FAILURE:
            return {...state, activateAccountLoading: false, isactivateAccountSucess:false, isactivateAccountFailed: action.data};
      default:
        return state;
    }
  };
  
  export default account;
  