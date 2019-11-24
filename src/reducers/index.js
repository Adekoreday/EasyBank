import { combineReducers } from 'redux';
import user from './user';
import modal from './modal';
import navbar from './navbar';
import account from './account';

export default combineReducers({
  user,
  navbar,
  account,
  modal
});
