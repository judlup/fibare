import { db } from "../../Initializers/firebase";

import { ADD_TODO, LIST_TODOS } from "../Actions/types";

const initialState = {
  list: [],
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      db.collection("todos").doc().set(action.payload);
      return { ...state, docs };
    case LIST_TODOS:
      return { ...state, list: action.payload };
    default:
      return state;
  }
};

export default todoReducer;
