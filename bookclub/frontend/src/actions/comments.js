import { GET_COMMENTS, ADD_COMMENT } from "./types";
import { returnErrors } from "./posts";

// GET COMMENTS
export const getComments = id => (dispatch, getState) => {
  // Headers
  const config = {
    headers: {
      "Content-Type": "application/json"
    },
    method: "GET"
  };

  let ok;
  let statusText;
  fetch(`/api/comments/?post=${id}`, config)
    .then(res => {
      ok = res.ok;
      statusText = res.statusText;
      return res.json();
    })
    .then(response => {
      if (ok) {
        dispatch({
          type: GET_COMMENTS,
          payload: response
        });
      } else {
        throw response;
      }
    })
    .catch(data => dispatch(returnErrors(data, statusText)));
};

// CLEAR COMMENTS
export const clearComments = () => (dispatch, getState) => {
  dispatch({
    type: CLEAR_COMMENTS
  });
};

// ADD COMMENT
export const addComment = comment => (dispatch, getState) => {
  // Headers
  const config = {
    headers: {
      "Content-Type": "application/json"
    },
    method: "POST",
    body: JSON.stringify(comment)
  };

  let ok;
  let statusText;
  // turn the fetch call into a promise so that it's possible to know whether is was successful or not
  return new Promise(function(resolve, reject) {
    fetch("/api/postcomment/", config)
      .then(res => {
        ok = res.ok;
        statusText = res.statusText;
        return res.json();
      })
      .then(response => {
        if (ok) {
          dispatch({
            type: ADD_COMMENT,
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
};
