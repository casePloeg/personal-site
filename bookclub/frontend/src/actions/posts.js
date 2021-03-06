import {
  GET_POSTS,
  GET_POST,
  DELETE_POST,
  ADD_POST,
  GET_ERRORS,
  CLEAR_POSTS,
  GET_COMMENTS
} from "./types";

import { returnErrors } from "./messages";

// CLEAR ALL POSTS
export const clearPosts = () => (dispatch, getState) => {
  dispatch({
    type: CLEAR_POSTS
  });
};

// GET POSTS
export const getPosts = numPosts => (dispatch, getState) => {
  // Headers
  const config = {
    headers: {
      "Content-Type": "application/json"
    },
    method: "GET"
  };

  let ok;
  let statusText;
  fetch(`/api/posts/?num=${numPosts}`, config)
    .then(res => {
      ok = res.ok;
      statusText = res.statusText;
      return res.json();
    })
    .then(response => {
      if (ok) {
        dispatch({
          type: GET_POSTS,
          payload: response
        });
      } else {
        throw response;
      }
    })
    .catch(data => dispatch(returnErrors(data, statusText)));
};

// GET INDIVIDUAL POST
export const getPost = id => (dispatch, getState) => {
  // Headers
  const config = {
    headers: {
      "Content-Type": "application/json"
    },
    method: "GET"
  };

  let ok;
  let statusText;
  let promise = new Promise(function(resolve, reject) {
    fetch(`/api/posts/${id}`, config)
      .then(res => {
        ok = res.ok;
        statusText = res.statusText;
        return res.json();
      })
      .then(response => {
        if (ok) {
          dispatch({
            type: GET_POST,
            payload: response
          });
          resolve();
        } else {
          throw response;
        }
      })
      .catch(data => {
        dispatch(returnErrors(data, statusText));
        reject();
      });
  });
  return promise;
};

// GET POSTS WITHOUT BODY
export const getPostLinks = () => (dispatch, getState) => {
  // Headers
  const config = {
    headers: {
      "Content-Type": "application/json"
    },
    method: "GET"
  };

  let ok;
  let statusText;
  fetch(`/api/postlinks`, config)
    .then(res => {
      ok = res.ok;
      statusText = res.statusText;
      return res.json();
    })
    .then(response => {
      if (ok) {
        dispatch({
          type: GET_POSTS,
          payload: response.map(result => ({ ...result, body: "" }))
        });
      } else {
        throw response;
      }
    })
    .catch(data => dispatch(returnErrors(data, statusText)));
};

// DELETE POST
export const deletePost = id => (dispatch, getState) => {
  // Get token from state
  const token = getState().auth.token;

  // Headers
  const config = {
    headers: {
      "Content-Type": "application/json"
    },
    method: "DELETE"
  };

  // If token add to headers config
  if (token) {
    config.headers["Authorization"] = `Token ${token}`;
  }

  let ok;
  let statusText;
  fetch(`/api/posts/${id}/`, config)
    .then(res => {
      ok = res.ok;
      statusText = res.statusText;
      if (ok) {
        dispatch({
          type: DELETE_POST,
          payload: id
        });
      } else {
        throw "No Delete";
      }
    })
    .catch(data => dispatch(returnErrors(data, statusText)));
};

// ADD POSTS
// throw error when request is not okay, keep track of statusText
export const addPost = post => (dispatch, getState) => {
  // Get token from state
  const token = getState().auth.token;

  // Headers
  const config = {
    headers: {
      "Content-Type": "application/json"
    },
    method: "POST",
    body: JSON.stringify(post)
  };

  // If token add to headers config
  if (token) {
    config.headers["Authorization"] = `Token ${token}`;
  }

  let ok;
  let statusText;
  // turn the fetch call into a promise so that it's possible to know whether is was successful or not
  let promise = new Promise(function(resolve, reject) {
    fetch("/api/posts/", config)
      .then(res => {
        ok = res.ok;
        statusText = res.statusText;
        return res.json();
      })
      .then(response => {
        if (ok) {
          dispatch({
            type: ADD_POST,
            payload: response
          });
          resolve();
        } else {
          throw response;
        }
      })
      .catch(data => dispatch(returnErrors(data, statusText)));
  });

  return promise;
};
