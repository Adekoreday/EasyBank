import { combineReducers } from 'redux';
import user from './user';
import modal from './modal';
import account from './account';
import transaction from './transaction';

export default combineReducers({
  user,
  account,
  transaction,
  modal
});
