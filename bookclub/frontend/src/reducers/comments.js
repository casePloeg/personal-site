import { GET_COMMENTS, ADD_COMMENT } from "../actions/types";

const initialState = {
  comments: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_COMMENTS:
      return {
        comments: action.payload
      };

    case ADD_COMMENT:
      return {
        comments: [...state.comments, action.payload]
      };
    default:
      return state;
  }
}
