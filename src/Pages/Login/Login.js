import React, { useState } from "react";
import firebase from "../../Initializers/firebase";
import { Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { successfulLogin, failurefulLogin, logout } from "../../Redux/Actions";

export const Login = () => {
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  function login() {
    let provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        const username = result.user.displayName;
        const email = result.user.email;
        const photo = result.user.photoURL;
        const userData = {
          username: username,
          email: email,
          photo: photo,
        };
        if (username && email && photo) {
          dispatch(successfulLogin(JSON.stringify(userData)));
        } else {
          dispatch(failurefulLogin());
        }
      });
  }

  function logoutGoogle() {
    dispatch(logout());
  }
  return (
    <>
      <h2>Login</h2>
      <Button
        variant="light"
        onClick={() => {
          login();
        }}
      >
        Google Login
      </Button>
      <Button
        onClick={() => {
          logoutGoogle();
        }}
      >
        Google Logout
      </Button>
      {auth ? <h6>Valuable information I shouldn't see</h6> : ""}
    </>
  );
};
