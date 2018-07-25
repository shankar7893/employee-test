import React, { Component } from "react";
import "./css/style.css";
import axios from "axios";
import { BrowserRouter as Router, Link, Redirect } from "react-router-dom";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { username: "", password: "" };
    this.set = { username: "", password: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onLogin = this.onLogin.bind(this);
  }

  handleChange(event) {
    console.log(event.target);
    if (event.target.name == "username")
      this.setState({ username: event.target.value }, () => {
        this.set.username = this.state.username;
        console.log(this.set);
      });
    else
      this.setState({ password: event.target.value }, () => {
        this.set.password = this.state.password;
        console.log(this.set);
      });
  }
  handleSubmit(event) {
    //alert("A name was submitted: " + this.set.username);
    event.preventDefault();
    this.onLogin(this);
  }
  onLogin(event) {
    axios({
      method: "POST",
      url: " http://localhost:5000/",
      data: {
        username: this.set.username,
        password: this.set.password
      }
    })
      .then(function(response) {
        console.log(response);
      })
      .catch(function(error) {
        event.props.history.push("/home");
        console.log(error);
      });
  }
  render() {
    return (
      <Router>
        <div className="App">
          <div className="body" />
          <div className="grad" />
          <div className="header">
            <div>
              Pronteff<span>Login</span>
            </div>
          </div>
          <br />
          <div className="login">
            <form onSubmit={this.handleSubmit}>
              <input
                type="text"
                placeholder="username"
                name="username"
                value={this.state.username}
                onChange={this.handleChange}
              />
              <br />
              <input
                type="password"
                placeholder="password"
                name="password"
                value={this.state.password}
                onChange={this.handleChange}
              />
              <br />
              <input type="submit" value="submit" />
            </form>
          </div>
        </div>
      </Router>
    );
  }
}

export default Login;
