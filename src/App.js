import React from "react";

// Libs
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import "./style.css";

import { Header } from "./Components/Header";
import { Footer } from "./Components/Footer";
import { Home } from "./Pages/Home/Home";
import { Login } from "./Pages/Login/Login";

export default function App() {
  return (
    <Router >
      <div>
        <Header />
        <Switch>
          <Route path="/login" component={Login} />
          <Route exac path="/" component={Home} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}
  