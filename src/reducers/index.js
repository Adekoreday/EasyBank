import { combineReducers } from 'redux';
import user from './user';
import modal from './modal';
import navbar from './navbar';

export default combineReducers({
  user,
  navbar,
  modal
});
