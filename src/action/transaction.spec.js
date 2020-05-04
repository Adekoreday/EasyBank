import configureMockStore from 'redux-mock-store';
import moxios from 'moxios';
import thunk from 'redux-thunk';
import * as transactions from './transaction';

const middleWares = [thunk];
const mockStore = configureMockStore(middleWares);

const userTransaction = {
  data: {
    TransactionId: 15,
    accountBalance: 7000,
    amount: 2000,
    cashier: 3,
    Transactiontype: 'credit'
  }
};

const error = {
  error: 'user unauthorized'
};

beforeEach(() => {
  moxios.install();
});
afterEach(() => {
  moxios.uninstall();
});

describe('Get user transaction test', () => {
  it('dispatch a success action for a single transaction', async () => {
    const expectedAction = [
      { type: 'GET_ALL_TRANSACTION_REQUEST' },
      { type: 'GET_ALL_TRANSACTION_SUCCESS', data: userTransaction }
    ];

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({ status: 200, response: { data: userTransaction } });
    });

    const store = mockStore({});
    await store.dispatch(transactions.getTransaction());
    expect(store.getActions()).toEqual(expectedAction);
  });

  it('dispatch a failure action for a failed transaction', async () => {
    const expectedAction = [
      { type: 'GET_ALL_TRANSACTION_REQUEST' },
      { type: 'GET_ALL_TRANSACTION_FAILURE', data: error }
    ];

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({ status: 401, response: error });
    });

    const store = mockStore({});
    await store.dispatch(transactions.getTransaction());
    expect(store.getActions()).toEqual(expectedAction);
  });
});

describe('Post user transaction', () => {
  it('dispatch a success action for successful transaction', async () => {
    const expectedAction = [
      { type: 'POST_TRANSACTION_REQUEST' },
      { type: 'POST_TRANSACTION_SUCCESS', data: {} }
    ];
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({ status: 200, response: { data: {} } });
    });
    const store = mockStore({});
    await store.dispatch(transactions.postTransact());
    expect(store.getActions()).toEqual(expectedAction);
  });

  it('dispatch a failure action for unsuccessful transaction', async () => {
    const expectedAction = [
      { type: 'POST_TRANSACTION_REQUEST' },
      { type: 'POST_TRANSACTION_FAILURE', data: error }
    ];
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({ status: 401, response: error });
    });
    const store = mockStore({});
    await store.dispatch(transactions.postTransact());
    expect(store.getActions()).toEqual(expectedAction);
  });
});