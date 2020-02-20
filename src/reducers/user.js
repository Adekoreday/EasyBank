import {
  USER_SIGNUP_REQUEST, USER_SIGNUP_SUCCESS, USER_SIGNUP_FAILURE, USER_SIGNIN_REQUEST, USER_SIGNIN_SUCCESS, USER_SIGNIN_FAILURE,
  CLEAR_USER_DATA, FETCH_USER_DETAILS_SUCCESS, FETCH_USER_DETAILS_FAILURE, FETCH_USER_DETAILS_REQUEST, GET_ALL_USERS_REQUEST,
  GET_ALL_USERS_SUCCESS, GET_ALL_USERS_FAILURE
} from '../actionTypes/actionTypes';

const initialState = {
  UserData: {},
  AllUsersData: {},
  isSignedIn: false,
  isSignedUp: false,
  loading: false,
  allUserloading: false,
  allUsersDataSucess: false,
  isAuth: false,
  authenticating: false
};

const user = (state = { ...initialState }, action) => {
  switch (action.type) {
    case USER_SIGNIN_SUCCESS:
      return {
        ...state, loading: false, isSignedIn: true, UserData: action.data
      };
    case USER_SIGNIN_FAILURE:
      return {
        ...state, loading: false, isSignedIn: false, UserData: action.data
      };
    case USER_SIGNIN_REQUEST:
      return { ...state, loading: true, isSignedIn: false };
    case USER_SIGNUP_SUCCESS:
      return {
        ...state, loading: false, isSignedUp: true, UserData: action.data
      };
    case USER_SIGNUP_FAILURE:
      return {
        ...state, loading: false, isSignedUp: false, UserData: action.data
      };
    case USER_SIGNUP_REQUEST:
      return { ...state, loading: true, isSignedUp: false };
    case CLEAR_USER_DATA:
      return initialState;
    case FETCH_USER_DETAILS_FAILURE:
      return {
        ...state, isAuth: false, UserData: action.data, authenticating: false
      };
    case FETCH_USER_DETAILS_SUCCESS:
      return {
        ...state, isAuth: true, UserData: action.data, authenticating: false
      };
    case FETCH_USER_DETAILS_REQUEST:
      return { ...state, isAuth: false, authenticating: true };
    case GET_ALL_USERS_REQUEST:
      return {
        ...state, AllUsersData: {}, allUserloading: true, allUsersDataSucess: false
      };
    case GET_ALL_USERS_SUCCESS:
      return {
        ...state, AllUsersData: action.data, allUserloading: false, allUsersDataSucess: true
      };
    case GET_ALL_USERS_FAILURE:
      return {
        ...state, AllUsersData: action.data, allUserloading: false, allUsersDataSucess: false
      };
    default:
      return state;
  }
};

export default user;
