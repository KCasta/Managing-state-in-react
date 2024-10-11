import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { TodoContenxtProvider } from "./context/TodoContenxt";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <TodoContenxtProvider>
      <App />
    </TodoContenxtProvider>
  </React.StrictMode>
);
