import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import "./index.css";
import reduxThunk from "redux-thunk";
import store from "../src/reducers/store";
import { BrowserRouter as Router } from "react-router-dom";
import { AUTH_SIGN } from "./actions/types";
import ReactRouter from "./components/router/router";
import registerServiceWorker from "./registerServiceWorker";

const createStorewithMiddeleware = applyMiddleware(reduxThunk)(createStore);

const appState = createStorewithMiddeleware(store);

//checking the token
const token = localStorage.getItem("token");

if (token) {
  appState.dispatch({ type: AUTH_SIGN });
}

ReactDOM.render(
  <Provider store={appState}>
    <Router>
      <ReactRouter />
    </Router>
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
