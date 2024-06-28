import React from "react";
import { createRoot } from "react-dom/client";
import './assets/styles/main.css';
import App from './App';
import './variables.css'; // import the global css file

const root = createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
