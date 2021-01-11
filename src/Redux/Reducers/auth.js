import { act } from "react-dom/test-utils";
import firebase from "../../Initializers/firebase";

import { SUCESSFUL_LOGIN, FAILURE_LOGIN, LOGOUT } from "../Actions/types";

const authReducer = (state = false, action) => {
  switch (action.type) {
    case SUCESSFUL_LOGIN:
      localStorage.setItem("userData", action.payload);
      return (state = true);
    case FAILURE_LOGIN:
      localStorage.setItem("userData", "");
      return (state = false);
    case LOGOUT:
      firebase
        .auth()
        .signOut()
        .then(function () {
          console.log("LOG OUT!");
          localStorage.setItem("userData", "");
        });
      return (state = false);
    default:
      return state;
  }
};

export default authReducer;
