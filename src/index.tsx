import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./store/index.ts";
import App from "./App.tsx";
import reportWebVitals from "./reportWebVitals";

import "./styles/index.scss";

export type RootState = ReturnType<typeof store.getState>;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

reportWebVitals();
