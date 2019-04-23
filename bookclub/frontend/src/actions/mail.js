import { returnErrors, createMessage } from "./messages";
export const subscribeToBlog = email => (dispatch, getState) => {
  // Headers
  const config = {
    headers: {
      "Content-Type": "application/json"
    },
    method: "POST",
    body: JSON.stringify(email)
  };

  let ok;
  let statusText;
  // turn the fetch call into a promise so that it's possible to know whether is was successful or not
  return new Promise(function(resolve, reject) {
    fetch("/api/clubmail/", config)
      .then(res => {
        ok = res.ok;
        statusText = res.statusText;
        return res.json();
      })
      .then(response => {
        if (ok) {
          resolve();
          dispatch(createMessage({ subscribed: "Subscribed!" }));
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
