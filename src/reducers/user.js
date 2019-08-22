import {
 USER_SIGNIN, USER_SIGNUP, USER_LOADING, CLEAR_USER_DATA
} from '../actionTypes/actionTypes';

const initialState = {
  SignIndata: {},
  SignUpdata: {},
  loading: false
};

const user = (state = { ...initialState }, action) => {
  switch (action.type) {
    case USER_SIGNIN:
      return { ...state, loading: true, SignIndata: action.data };
    case USER_SIGNUP:
      return { ...state, loading: true, SignUpdata: action.data };
    case USER_LOADING:
      return { ...state, loading: action.data };
    case CLEAR_USER_DATA:
      return initialState;
    default:
      return state;
  }
};

export default user;
