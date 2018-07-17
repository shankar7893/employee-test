import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './Login/css/style.css'
class App extends Component {
  render() {
    return (
      <div className="App">
         <div class="body"></div>
		<div className="grad"></div>
		<div className="header">
			<div>Pronteff<span>Login</span></div>
		</div>
		<br />
		<div className="login">
				<input type="text" placeholder="username" name="user" /><br />
				<input type="password" placeholder="password" name="password" /><br />
				<input type="button" value="Login" />
		</div>
      </div>
    );
  }
}

export default App;
