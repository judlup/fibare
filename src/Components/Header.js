import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import firebase from "../Initializers/firebase";
import { useSelector, useDispatch } from "react-redux";
import { Navbar, Button } from "react-bootstrap";
import { successfulLogin, failurefulLogin, logout } from "../Redux/Actions";

export const Header = () => {
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
      <Navbar expand="lg" variant="light" bg="light">
        <Navbar.Brand>
          <Link to="/">Fibare</Link>
        </Navbar.Brand>
        {auth ? (
          <Button
            onClick={() => {
              logoutGoogle();
            }}
          >
            Logout
          </Button>
        ) : (
          <Button
            variant="light"
            onClick={() => {
              login();
            }}
          >
            Google Login
          </Button>
        )}
      </Navbar>
    </>
  );
};
