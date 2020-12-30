import React from "react";
import firebase from "../../Initializers/firebase";
import { Button } from "react-bootstrap";

export const Login = () => {
  function login() {
    let provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        console.log(result);
      });
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
        Google Login --
      </Button>
    </>
  );
};