import React from "react";
import { createStore } from "redux";
import ReactDOM from "react-dom";
import { reducer } from "./reducers/index";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";

const store = createStore(reducer);

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
  rootElement
);
