import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super()

    this.state = {
      username: "",
      password: ""
    }
  }

  updateUsername = (val) => {
    this.setState({
      username: val
    })
  }

  updatePassword = (val) => {
    this.setState({
      password: val
    })
  }

  getAlert = () => {
    alert(`Username: ${this.state.username} Password: ${this.state.password}`);
  }

  render() {
    return (
      <div>
        <h3>username:</h3>
        <input type="text" onChange={(e) => this.updateUsername(e.target.value)}/>
        <h3>Password:</h3>
        <input type="text" onChange={(e) => this.updatePassword(e.target.value)}/>
        <button onClick={() => this.getAlert()}>Login</button>
      </div>
    );
  }
}

export default App;
