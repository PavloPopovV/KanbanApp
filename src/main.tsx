import React from "react"
import { createRoot } from "react-dom/client"
import { Provider } from "react-redux"
import { store } from "./app/store"
import Home from "./page/Home"
import "./assets/styles/index.css"

const container = document.getElementById("root");

container &&
  createRoot(container).render(
    <React.StrictMode>
      <Provider store={store}>
        <Home />
      </Provider>
    </React.StrictMode>
  );
