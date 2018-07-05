import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import axios from 'axios';

class App extends Component {
  constructor() {
    super();

    this.state = {
      planet: ""
    }
  }

  componentDidMount() {
    axios.get("https://swapi.co/api/planets/1").then( response => {
      this.setState({
        planet: response.data
      });
    });
  }

  render() {
    return (
      <div className="App">
        <h1>Name: { this.state.planet.name }</h1>
        <h1>Climate: {this.state.planet.climate}</h1>
        <h1>Population: {this.state.planet.population}</h1>
        <h1>Rotation Period: {this.state.planet.rotation_period}</h1>
      </div>
    );
  }
}

export default App;