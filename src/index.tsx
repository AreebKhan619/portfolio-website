import React from "react";
import ReactDOM from "react-dom/client";
import { segmentLogScriptSetup } from "./analytics/segment";
import GlobalStyles from "./assets/styles/globalStyles";
import App from "./pages";

segmentLogScriptSetup();
const root = ReactDOM.createRoot(document.getElementById("root") as Element);
root.render(
  <React.StrictMode>
    <GlobalStyles />
    <App />
  </React.StrictMode>
);
