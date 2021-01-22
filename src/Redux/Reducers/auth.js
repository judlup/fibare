import firebase from "../../Initializers/firebase";

import { SUCESSFUL_LOGIN, FAILURE_LOGIN, LOGOUT } from "../Actions/types";

const initialState = {
  login: localStorage.getItem("userData") == null ? false : true,
  user: JSON.parse(localStorage.getItem("userData")),
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SUCESSFUL_LOGIN:
      localStorage.setItem("userData", JSON.stringify(action.payload));
      return {
        ...state,
        login: true,
        user: action.payload,
      };
    case FAILURE_LOGIN:
      localStorage.removeItem("userData");
      return { ...state, login: false, user: "" };
    case LOGOUT:
      firebase
        .auth()
        .signOut()
        .then(function () {
          localStorage.removeItem("userData");
        });
      return { ...state, login: false, user: "" };
    default:
      return state;
  }
};

export default authReducer;
