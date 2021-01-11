import React, { useState } from "react";
import firebase from "../../Initializers/firebase";
import { Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, signedIn } from "../../Redux/Actions";

export const Login = () => {
  const counter = useSelector((state) => state.counter);
  const isLogged = useSelector((state) => state.isLogged);
  const dispatch = useDispatch();
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
        Google Login
      </Button>
      <Button
        onClick={() => {
          dispatch(increment(5));
        }}
      >
        +
      </Button>
      <Button
        onClick={() => {
          dispatch(decrement());
        }}
      >
        -
      </Button>
      <Button
        onClick={() => {
          dispatch(signedIn());
        }}
      >
        SignIn
      </Button>
      <h6>Counter {counter}</h6>
      {isLogged ? <h6>Valuable information I shouldn't see</h6> : ""}
    </>
  );
};
