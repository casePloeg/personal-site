import { combineReducers } from "redux";

import posts from "./posts";
import comments from "./comments";
import errors from "./errors";
import messages from "./messages";
import auth from "./auth";

export default combineReducers({
  posts,
  comments,
  errors,
  messages,
  auth
});
