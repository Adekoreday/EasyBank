import { combineReducers } from 'redux';
import user from './user';
import modal from './modal';
import account from './account';

export default combineReducers({
  user,
  account,
  modal
});
