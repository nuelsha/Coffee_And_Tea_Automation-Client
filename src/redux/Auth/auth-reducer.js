import { authActionTypes } from "./auth-action-types";

const INITIAL_STATE = {
  loading: false,
  userInfo: null,
  token: localStorage.getItem("token"),
  error: null,
  isAuthenticated: localStorage.getItem("token") ? true : false,
};

const authReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    // Login cases
    case authActionTypes.USER_LOGIN_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case authActionTypes.USER_LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        userInfo: action.payload.user || action.payload,
        token: action.payload.token,
        isAuthenticated: true,
        error: null,
      };
    case authActionTypes.USER_LOGIN_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
        isAuthenticated: false,
      };

    // Register cases
    case authActionTypes.USER_REGISTER_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case authActionTypes.USER_REGISTER_SUCCESS:
      return {
        ...state,
        loading: false,
        userInfo: action.payload.user,
        isAuthenticated: action.payload.token ? true : false,
        error: null,
      };
    case authActionTypes.USER_REGISTER_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    // Profile cases
    case authActionTypes.USER_PROFILE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case authActionTypes.USER_PROFILE_SUCCESS:
      return {
        ...state,
        loading: false,
        userInfo: action.payload,
        isAuthenticated: true,
      };
    case authActionTypes.USER_PROFILE_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    // Logout case
    case authActionTypes.USER_LOGOUT:
      return {
        ...state,
        token: null,
        userInfo: null,
        isAuthenticated: false,
      };

    default:
      return state;
  }
};

export default authReducer;