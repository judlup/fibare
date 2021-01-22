import {
  SUCESSFUL_LOGIN,
  FAILURE_LOGIN,
  LOGOUT,
  ADD_TODO,
  LIST_TODOS,
} from "./types";

export const successfulLogin = (data) => {
  return {
    type: SUCESSFUL_LOGIN,
    payload: data,
  };
};

export const failurefulLogin = () => {
  return {
    type: FAILURE_LOGIN,
  };
};

export const logout = () => {
  return {
    type: LOGOUT,
  };
};

export const addTodo = (todo) => {
  return {
    type: ADD_TODO,
    payload: todo,
  };
};

export const listTodos = (todos) => {
  return {
    type: LIST_TODOS,
    payload: todos,
  };
};
