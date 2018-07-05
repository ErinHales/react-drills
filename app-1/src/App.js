import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      display: ""
    }
  }

  handleChange(e) {
    this.setState({
      display: e.target.value
    })
  }

  render() {
    return (
      <div>
        <input onChange={(e) => this.handleChange(e)}/>
        <h1>{this.state.display}</h1>
      </div>
    );
  }
}

export default App;