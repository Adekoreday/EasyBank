import {
  POST_TRANSACTION_REQUEST, POST_TRANSACTION_SUCCESS, POST_TRANSACTION_FAILURE, GET_ALL_TRANSACTIONS_REQUEST, GET_ALL_TRANSACTIONS_SUCCESS,
  GET_ALL_TRANSACTIONS_FAILURE
} from '../actionTypes/actionTypes';

const initialState = {
  transactionDetails: {},
  isloadingTransaction: false,
  isloadingAllTransaction: false,
  allTransactionData: {},
  isFailedAllTransaction: {},
  isSuccessTransaction: false,
  isFailureTransactDetails: {}
};

const transaction = (state = { ...initialState }, action) => {
  switch (action.type) {
    case POST_TRANSACTION_REQUEST:
      return {
        ...state, isloadingTransaction: true, transactionDetails: {}, isFailureTransactDetails: {}
      };
    case POST_TRANSACTION_SUCCESS:
      return {
        ...state, isloadingTransaction: false, isSuccessTransaction: true, transactionDetails: action.data
      };
    case POST_TRANSACTION_FAILURE:
      return {
        ...state, isloadingTransaction: false, isSuccessTransaction: false, isFailureTransactDetails: action.data
      };
    case GET_ALL_TRANSACTIONS_REQUEST:
      return {
        ...state, isFailedAllTransaction: {}, allTransactionData: {}, isloadingAllTransaction: true
      };
    case GET_ALL_TRANSACTIONS_SUCCESS:
      return {
        ...state, allTransactionData: action.data, isloadingAllTransaction: false
      };
    case GET_ALL_TRANSACTIONS_FAILURE:
      return {
        ...state, isFailedAllTransaction: action.data, isloadingAllTransaction: false
      };
    default:
      return state;
  }
};

export default transaction;
