import { ADD_TODO } from "../Actions/types";

const todos = [];

const todoReducer = (state = todos, action) => {
  switch (action.type) {
    case ADD_TODO:
      return (state = action.payload);
    default:
      return state;
  }
};

export default todoReducer;
