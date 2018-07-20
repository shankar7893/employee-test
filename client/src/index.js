import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { browserHistory } from "react-router";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Home/Home";
import Login from "./Login/Login";

ReactDOM.render(
  <Router history={browserHistory}>
    <Switch>
      <Route exact path="/" component={Login} />
      <Route exact path="/home" component={Home} />
      <Route path="*" component={Login} />
    </Switch>
  </Router>,
  document.getElementById("root")
);
