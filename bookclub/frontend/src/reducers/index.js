import { combineReducers } from "redux";

import posts from "./posts";
import comments from "./comments";
import errors from "./errors";
import auth from "./auth";

export default combineReducers({
  posts,
  comments,
  errors,
  auth
});
