import {
 USER_SIGNIN, USER_SIGNUP, USER_LOADING, CLEAR_USER_DATA, FETCH_USER_DETAILS_SUCCESS, FETCH_USER_DETAILS_FAILURE, FETCH_USER_DETAILS_REQUEST
} from '../actionTypes/actionTypes';

const initialState = {
  UserData: {},
  loading: false,
  isAuth: false,
  authenticating: false
};

const user = (state = { ...initialState }, action) => {
  switch (action.type) {
    case USER_SIGNIN:
      return { ...state, loading: true, UserData: action.data };
    case USER_SIGNUP:
      return { ...state, loading: true, UserData: action.data };
    case USER_LOADING:
      return { ...state, loading: action.data };
    case CLEAR_USER_DATA:
      return initialState;
    case FETCH_USER_DETAILS_FAILURE:
      return {...state, isAuth: false,  UserData: action.data, authenticating: false};
    case FETCH_USER_DETAILS_SUCCESS:
        return {...state, isAuth: true, UserData: action.data, authenticating: false};
    case  FETCH_USER_DETAILS_REQUEST:
      return {...state, authenticating: true}
    default:
      return state;
  }
};

export default user;
