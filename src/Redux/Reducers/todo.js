import { ADD_TODO } from "../Actions/types";

import { db } from "../../Initializers/firebase";

const todos = [];

const todoReducer = async (state = todos, action) => {
  switch (action.type) {
    case ADD_TODO:
      const result = await db.collection("todos").doc().set(action.payload);
      return result;
    default:
      return state;
  }
};

export default todoReducer;
