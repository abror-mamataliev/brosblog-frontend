import { StrictMode } from "react";
import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";

import "./index.scss";
// import 'bootstrap/dist/css/bootstrap.min.css';
import Router from "./router";

render(
  <StrictMode>
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  </StrictMode>,
  document.getElementById('root')
);
