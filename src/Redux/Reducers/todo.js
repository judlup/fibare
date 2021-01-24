import { toast } from "react-toastify";
import { db } from "../../Initializers/firebase";

import { ADD_TODO, DELETE_TODO } from "../Actions/types";

const initialState = {};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      toast.success("Todo created successful");
      return state;
    case DELETE_TODO:
      toast.success("Todo deleted successful");
      return { ...state };
    default:
      return state;
  }
};

export default todoReducer;
