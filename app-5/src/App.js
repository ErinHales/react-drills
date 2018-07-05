import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Image from './components/Image.js';

class App extends Component {
  render() {
    return (
      <div>
        <Image imageURL="http://i63.tinypic.com/11mba77.jpg"/>
      </div>
    );
  }
}

export default App;

