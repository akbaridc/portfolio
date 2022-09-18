import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "devicon/devicon.min.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

const parent = document.getElementById("root");

const root = ReactDOM.createRoot(parent);
parent.style.marginBottom = "70px";
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
