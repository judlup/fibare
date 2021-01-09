import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";

import { Navbar } from "react-bootstrap";

const styles = {
  navbar: {
    backgroundColor: "red",
    height: 60,
    textAlign: "inline"
  }
};

export const Header = () => {
  return (
    <>
      <Navbar expand="lg" variant="light" bg="light">
        <Navbar.Brand>
          <Link to="/">Fibare</Link>
        </Navbar.Brand>
        <Link to="/">Me</Link>
      </Navbar>
    </>
  );
};
