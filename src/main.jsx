import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "rsuite/dist/rsuite.min.css";
import "./icons.css";
import "./index.css";
import "./assets/Css/CustomCss.css";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
import { BrowserRouter, HashRouter } from "react-router-dom";
import ModelNameContext from "./context/callingModelContext.jsx";
import store from "./Redux/Store.js";
import { Provider } from "react-redux";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <ModelNameContext>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ModelNameContext>
  </Provider>
);
