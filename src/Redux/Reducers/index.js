import authReducer from "./auth";
import todoReducer from "./todo";
import { combineReducers } from "redux";

const rootReducers = combineReducers({
  auth: authReducer,
  todos: todoReducer,
});

export default rootReducers;
