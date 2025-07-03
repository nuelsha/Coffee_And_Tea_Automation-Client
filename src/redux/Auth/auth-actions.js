import { authActionTypes } from "./auth-action-types";
import API from "../../utils/axiosConfig";

// Login user
export const login = (email, password) => async (dispatch) => {
  try {
    dispatch({ type: authActionTypes.USER_LOGIN_REQUEST });

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await API.post(
      "/api/users/login",
      { email, password }
    );

    dispatch({
      type: authActionTypes.USER_LOGIN_SUCCESS,
      payload: data,
    });

    // Store token in localStorage
    localStorage.setItem("token", data.token);
  } catch (error) {
    dispatch({
      type: authActionTypes.USER_LOGIN_FAIL,
      payload:
        error.response && error.response.data.error
          ? error.response.data.error
          : error.message,
    });
  }
};

// Register user
export const register = (name, email, password) => async (dispatch) => {
  try {
    dispatch({ type: authActionTypes.USER_REGISTER_REQUEST });

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await API.post(
      "/api/users/register",
      { name, email, password }
    );

    dispatch({
      type: authActionTypes.USER_REGISTER_SUCCESS,
      payload: data,
    });

    // Automatically log in after registration
    dispatch({
      type: authActionTypes.USER_LOGIN_SUCCESS,
      payload: data,
    });

    // Store token in localStorage if available
    if (data.token) {
      localStorage.setItem("token", data.token);
    }
  } catch (error) {
    dispatch({
      type: authActionTypes.USER_REGISTER_FAIL,
      payload:
        error.response && error.response.data.error
          ? error.response.data.error
          : error.message,
    });
  }
};

// Logout user
export const logout = () => (dispatch) => {
  localStorage.removeItem("token");
  dispatch({ type: authActionTypes.USER_LOGOUT });
};

// Get user profile
export const getUserProfile = () => async (dispatch, getState) => {
  try {
    dispatch({ type: authActionTypes.USER_PROFILE_REQUEST });

    // Get token from state
    const token = localStorage.getItem("token");

    if (!token) {
      throw new Error("No token found");
    }

    const { data } = await API.get("/api/users/profile");

    dispatch({
      type: authActionTypes.USER_PROFILE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: authActionTypes.USER_PROFILE_FAIL,
      payload:
        error.response && error.response.data.error
          ? error.response.data.error
          : error.message,
    });
  }
};