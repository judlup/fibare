import { db } from "../../Initializers/firebase";

import { ADD_TODO, LIST_TODOS } from "../Actions/types";

const initialState = {};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return state;
    case LIST_TODOS:
      return { ...state };
    default:
      return state;
  }
};

export default todoReducer;
