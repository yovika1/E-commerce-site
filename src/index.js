import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import store from "./Redux/store";
import { Provider } from "react-redux";
library.add(fas);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
