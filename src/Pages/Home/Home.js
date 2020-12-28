import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { Redirect } from "react-router-dom";
import firebase from "../../Initializers/firebase";
export const Home = () => {
  const [loged, setLoged] = useState(false);
  if (!loged) {
    return <Redirect to={"/login"} />;
  }

  function login() {
    let provider = firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then(result => {
        console.log(result);
      });
  }
  return (
    <>
      <h1> Home </h1>
      <Button
        variant="primary"
        onClick={() => {
          // setRedirect("/login");
        }}
      >
        Ir a Login{" "}
      </Button>
    </>
  );
};
