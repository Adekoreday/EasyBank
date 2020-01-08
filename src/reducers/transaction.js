import {
    POST_TRANSACTION_REQUEST, POST_TRANSACTION_SUCCESS, POST_TRANSACTION_FAILURE
  } from '../actionTypes/actionTypes';
  
  const initialState = {
    transactionDetails: {},
    isloadingTransaction: false,
    isSuccessTransaction: false,
    isFailureTransactDetails: {}
  };
  
  const transaction = (state = { ...initialState }, action) => {
    switch (action.type) {
        case POST_TRANSACTION_REQUEST:
            return {...state, isloadingTransaction: true, transactionDetails: {}, isFailureTransactDetails: {}}
            break;
        case POST_TRANSACTION_SUCCESS:
            return {...state, isloadingTransaction: false, isSuccessTransaction: true, transactionDetails: action.data}
            break;
        case POST_TRANSACTION_FAILURE:
            return {...state, isloadingTransaction: false, isSuccessTransaction: false, isFailureTransactDetails: action.data}
            break;
      default:
        return state;
    }
  };
  
  export default transaction;
  