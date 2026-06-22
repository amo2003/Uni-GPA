import React from "react";
import ReactDOM from "react-dom/client";
import { AuthProvider } from "@asgardeo/auth-react";
import { asgardeoConfig } from "./asgardeo";
import App from "./App";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AuthProvider config={asgardeoConfig}>
    <App />
  </AuthProvider>
);
