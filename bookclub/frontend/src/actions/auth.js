import { returnErrors } from "./posts";

import {
  USER_LOADED,
  USER_LOADING,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT_SUCCESS
} from "./types";

// CHECK TOKEN & LOAD USER
export const loadUser = () => (dispatch, getState) => {
  // User loading
  dispatch({ type: USER_LOADING });

  // Get token from state
  const token = getState().auth.token;

  // Headers
  const config = {
    headers: {
      "Content-Type": "application/json"
    },
    method: "GET"
  };

  // If token add to headers config
  if (token) {
    config.headers["Authorization"] = `Token ${token}`;
  }

  let ok;
  let statusText;
  fetch("/api/auth/user", config)
    .then(res => {
      ok = res.ok;
      statusText = res.statusText;
      return res.json();
    })
    .then(response => {
      if (ok) {
        dispatch({
          type: USER_LOADED,
          payload: response.data
        });
      } else {
        throw response;
      }
    })
    .catch(data => {
      dispatch(returnErrors(data, statusText));
      dispatch({ type: AUTH_ERROR });
    });
};

// LOGIN USER
export const login = (username, password) => dispatch => {
  console.log("hello");
  // Request Body

  // Headers
  const config = {
    headers: {
      "Content-Type": "application/json"
    },
    method: "POST",
    body: JSON.stringify({ username, password }),
    credentials: "omit"
  };

  let ok;
  let statusText;
  fetch("/api/auth/login", config)
    .then(res => {
      ok = res.ok;
      statusText = res.statusText;
      return res.json();
    })
    .then(response => {
      if (ok) {
        console.log(response);
        dispatch({
          type: LOGIN_SUCCESS,
          payload: response
        });
      } else {
        throw response;
      }
    })
    .catch(data => {
      dispatch(returnErrors(data, statusText));
      dispatch({ type: LOGIN_FAIL });
    });
};

// LOGOUT USER
export const logout = () => (dispatch, getState) => {
  // Get token from state
  const token = getState().auth.token;

  // Headers
  const config = {
    headers: {
      "Content-Type": "application/json"
    },
    method: "POST"
  };

  // If token add to headers config
  if (token) {
    config.headers["Authorization"] = `Token ${token}`;
  }

  console.log(config);
  let ok;
  let statusText;
  fetch("/api/auth/logout/", config)
    .then(res => {
      ok = res.ok;
      statusText = res.statusText;
      if (ok) {
        console.log("response");
        dispatch({ type: LOGOUT_SUCCESS });
      } else {
        throw "rip";
      }
      return res.json();
    })

    .catch(data => {
      dispatch(returnErrors(data, statusText));
    });
};
