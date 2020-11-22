import React from "react";
import ReactDOM from "react-dom";

/*
    keep track of the globle store which keeps the state
    provider enables the store to anywhere of the app
*/
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import reducers from "./reducers";

import App from "./App";

const store = createStore(reducers, compose(applyMiddleware(thunk))); // setup thunk middleware with redux

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
