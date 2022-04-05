import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

//Prepering redux to be used though the whole app.
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import reducers from "./reducers";

//Seting up redux.
const store = createStore(reducers, compose(applyMiddleware(thunk)));

//Wraping the App component in side the Provider to set the created store.
ReactDOM.render(
  <Provider store={store}>
    <App />{" "}
  </Provider>,
  document.getElementById("root")
);
