import { ADD_NAME, CLEAR } from "./Actions";
import { combineReducers } from "redux";

function name(state = [], action) {
  switch (action.type) {
    case ADD_NAME:
      return [...state].concat(action.name);
    case CLEAR:
      return [];
    default:
      return state;
  }
}

export default combineReducers({ name });
