import React, { Component } from "react";
import "./css/style.css";
import axios from "axios";

class App extends Component {
  onLogin() {
    axios({
      method: "POST",
      url: " http://localhost:5000/",
      data: {
        username: "prasad",
        password: "123456"
      }
    })
      .then(function(response) {
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      });
  }
  render() {
    return (
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
          <input type="text" placeholder="username" name="user" />
          <br />
          <input type="password" placeholder="password" name="password" />
          <br />
          <input type="button" value="Login" onClick={this.onLogin} />
        </div>
      </div>
    );
  }
}

export default App;
