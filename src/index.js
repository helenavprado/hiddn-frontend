import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App/App";
import store from "./components/App/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
let variavel = root.render(
  <React.StrictMode>
    {/* next step: figure out how to send info as PROPS */}
    <App dispatch={store.dispatch} />
  </React.StrictMode>
);

//subscribe method
