import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router } from "react-router-dom";
import SiteRoutes from "./routes.js";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <SiteRoutes />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
