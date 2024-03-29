import React from "react";
import ReactDOM from "react-dom";
import AddName from "./AddName";
import { Provider } from "react-redux";
import store from "./store";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <AddName />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
