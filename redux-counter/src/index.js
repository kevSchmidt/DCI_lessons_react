import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";

import App from "./App";
import allReducer from "./reducers";

import "./index.css";

/* ******** REDUX EXAMPLE IN ONE FILE ***
// ---- Actions ----
const increment = () => {
  return {
    type: "INCREMENT",
  };
};

const decrement = () => {
  return {
    type: "DECREMENT",
  };
};

// ---- Reducers ----
const counter = (state = 0, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
  }
};

// ---- Store ----
let store = createStore(counter);

// ---- Display to console ----
store.subscribe(() => console.log(store.getState()));

// ---- Dispatch ----
store.dispatch(increment());
store.dispatch(decrement());
store.dispatch(decrement());
******** */

const store = createStore(
  allReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  // https://github.com/zalmoxisus/redux-devtools-extension
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
