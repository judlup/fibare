import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
// Redux
import store from "./Redux/Store/index";
import { addArticle } from "./Redux/Actions/index";

window.store = store;
window.addArticle = addArticle;

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

