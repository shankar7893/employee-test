import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Home/Home";
import Login from "./Login/Login";

ReactDOM.render(
  <Router>
    <Switch>
      <Route exact path="/" component={Login} />
      <Route exact path="/home" component={Home} />
      <Route path="*" component={Login} />
    </Switch>
  </Router>,
  document.getElementById("root")
);
