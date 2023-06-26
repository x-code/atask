import React from "react";
import { render } from "react-dom";
import Routes from "./Routes";
import { Provider } from "react-redux";
import store from "./store";
import * as serviceWorker from "./serviceWorker";
window.store = store;

render(
  <Provider store={store}>
    <Routes />
  </Provider>,
  document.getElementById("root")
);
serviceWorker.register();
