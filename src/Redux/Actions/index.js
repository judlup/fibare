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
  return (dispatch, getState, { getFirebase }) => {
    //make async call to database
    const firestore = getFirebase().firestore();
    firestore
      .collection("todos")
      .add({
        ...todo,
      })
      .then(() => {
        dispatch({ type: ADD_TODO, payload: todo });
      })
      .catch((err) => {
        console.log("ADD_TODO ERROR: ", err);
      });
  };
};

export const listTodos = (todos) => {
  return {
    type: LIST_TODOS,
    payload: todos,
  };
};
