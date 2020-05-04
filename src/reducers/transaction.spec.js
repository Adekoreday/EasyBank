/* eslint-disable max-len */
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import reducer from './transaction';

import {
  GET_ALL_TRANSACTIONS_REQUEST,
  GET_ALL_TRANSACTIONS_SUCCESS,
  GET_ALL_TRANSACTIONS_FAILURE,
  POST_TRANSACTION_REQUEST,
  POST_TRANSACTION_SUCCESS,
  POST_TRANSACTION_FAILURE
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

const error = {
  error: 'user unauthorized'
};

describe('post transaction reducer test', () => {
  it('returns the initial state details when no changes occour', () => {
    const action = { type: undefined };
    expect(reducer(undefined, action)).toEqual(initialState);
  });
  it('makes a post transaction request', () => {
    const action = { type: POST_TRANSACTION_REQUEST };
    expect(reducer({ ...initialState }, action)).toEqual({
      ...initialState, isloadingTransaction: true, transactionDetails: {}, isFailureTransactDetails: {}
    });
  });
  it('returns transaction details on successful post action', () => {
    const action = {
      type: POST_TRANSACTION_SUCCESS,
      data: {
        TransactionId: 15,
        accountBalance: 7000,
        amount: 2000,
        cashier: 3,
        Transactiontype: 'credit'
      }
    };
    expect(reducer({ ...initialState }, action)).toEqual({
      ...initialState, isloadingTransaction: false, isSuccessTransaction: true, transactionDetails: action.data
    });
  });

  it('returns error details on failed post transaction action', () => {
    const action = {
      type: POST_TRANSACTION_FAILURE,
      data: error
    };
    expect(reducer({ ...initialState }, action)).toEqual({
      ...initialState, isloadingTransaction: false, isSuccessTransaction: false, isFailureTransactDetails: error
    });
  });
});


describe('get transaction reducer test', () => {
  it('makes a get transaction request', () => {
    const action = { type: GET_ALL_TRANSACTIONS_REQUEST };
    expect(reducer({...initialState }, action)).toEqual({
      ...initialState, isFailedAllTransaction: {}, allTransactionData: {}, isloadingAllTransaction: true
    });
  });
  it('returns transaction details on successful get action', () => {
    const action = {
      type: GET_ALL_TRANSACTIONS_SUCCESS,
      data: {
        TransactionId: 15,
        accountBalance: 7000,
        amount: 2000,
        cashier: 3,
        Transactiontype: 'credit'
      }
    };
    expect(reducer({ ...initialState }, action)).toEqual({
      ...initialState, allTransactionData: action.data, isloadingAllTransaction: false
    });
  });

  it('returns error details on failed post transaction action', () => {
    const action = {
      type: GET_ALL_TRANSACTIONS_FAILURE,
      data: error
    };
    expect(reducer({ ...initialState }, action)).toEqual({
      ...initialState, isFailedAllTransaction: action.data, isloadingAllTransaction: false
    });
  });
});
