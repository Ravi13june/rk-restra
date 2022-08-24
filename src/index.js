import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import initStore from "./store";
import Routes from "./routes/Routes";
import "@icon/icofont/icofont.css";
import "bootstrap/dist/css/bootstrap.min.css";
//import "./assets/clary.css";

import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={initStore()}>
      <Routes />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
