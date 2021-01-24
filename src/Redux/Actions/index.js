import {
  SUCESSFUL_LOGIN,
  FAILURE_LOGIN,
  LOGOUT,
  ADD_TODO,
  DELETE_TODO,
  TOGGLE_TODO,
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

export const deleteTodo = (todo) => {
  return (dispatch, getState, { getFirebase }) => {
    const firestore = getFirebase().firestore();
    firestore
      .collection("todos")
      .doc(todo.id)
      .delete()
      .then(() => {
        dispatch({ type: DELETE_TODO });
      })
      .catch((err) => {
        console.log("DELETE_TODO ERROR: ", err);
      });
  };
};

export const toggleTodo = (todo) => {
  return (dispatch, getState, { getFirebase }) => {
    const firestore = getFirebase().firestore();
    firestore
      .collection("todos")
      .doc(todo.id)
      .set({ ...todo, done: !todo.done }, { merge: true })
      .then(() => {
        dispatch({ type: TOGGLE_TODO, todo });
      })
      .catch((err) => {
        console.log("TOGGLE_TODO ERROR: ", err);
      });
  };
};
