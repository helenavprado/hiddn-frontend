import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App/App";
import store from "./components/App/store";
import { keycloakLogin } from "./services/keycloak/KeycloakService.js";

keycloakLogin();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* next step: figure out how to send info as PROPS */}
    <App dispatch={store.dispatch} />
  </React.StrictMode>
);