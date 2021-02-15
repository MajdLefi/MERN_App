import axios from "axios";
import {
  USER_LOADING,
  LOGIN_USER,
  REGISTER_USER,
  LOGOUT_USER,
  GET_AUTH_USER,
  AUTH_ERRORS,
} from "../constants/actionsType";

//set the user loading
const userLoading = (dispatch) => {
  dispatch({
    type: USER_LOADING,
  });
};

//register
export const registerUser = (formData) => async (dispatch) => {
  dispatch(userLoading);
  try {
    const res = await axios.post("/api/auth/register", formData);
    dispatch({
      type: REGISTER_USER,
      payload: res.data, //{ msg: 'User registred with success', user, token }
    });
  } catch (error) {
    console.dir(error);

    const { errors, msg } = error.response.data;

    if (Array.isArray(errors)) {
      errors.forEach((err) => alert(err.msg));
    }
    console.log(errors);
    if (msg) {
      alert(msg);
    }
  }
};

//login
export const loginUser = (formData) => async (dispatch) => {
  dispatch(userLoading);
  try {
    const res = await axios.post("/api/auth/login", formData);
    dispatch({
      type: LOGIN_USER,
      payload: res.data, //{ msg: 'User logged with success', user, token }
    });
  } catch (error) {
    console.dir(error);

    const { errors, msg } = error.response.data;

    if (Array.isArray(errors)) {
      errors.forEach((err) => alert(err.msg));
    }
    console.log(errors);
    if (msg) {
      alert(msg);
    }

    dispatch({
      type: AUTH_ERRORS,
    });
  }
};

export const getAuthUser = () => async (dispatch) => {
  try {
    const config = {
      headers: {
        "x-auth-token": localStorage.getItem("token"),
      },
    };
    const res = await axios.get("/api/auth/user", config);
    dispatch({
      type: GET_AUTH_USER,
      payload: res.data,
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: AUTH_ERRORS,
    });
  }
};

//logout
export const logout = () => (dispatch) => {
  dispatch({
    type: LOGOUT_USER,
  });
};
