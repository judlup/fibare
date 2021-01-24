import React from "react";

// Libs
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./style.css";

import { Header } from "./Components/Header";
import { Footer } from "./Components/Footer";
import Home from "./Pages/Home";

export default function App() {
  return (
    <Router>
      <div>
        <ToastContainer />
        <Header />
        <Switch>
          {/* <Route path="/login" component={Login} /> */}
          <Route exac path="/" component={Home} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}
