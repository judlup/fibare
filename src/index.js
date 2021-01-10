import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
// Redux
import store from "./Redux/Store/index";
import { addArticle } from "./Redux/Actions/index";
import { Provider } from "react-redux";

window.store = store;
window.addArticle = addArticle;

ReactDOM.render(
  <Provider store={store}>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

