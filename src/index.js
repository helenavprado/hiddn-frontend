import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./app.js";
import store from "./store.js";
import { keycloakLogin } from "./components/services/keycloak/KeycloakService.js";

keycloakLogin();

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
