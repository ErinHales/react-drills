import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      list: ["Pizza", "Apples", "Bananas", "Lunch Meat", "Cereal", "Oatmeal"]
    }
  }
  
  makeList() {
    var arr = [];
    for(var i=0; i<this.state.list.length; i++) {
      arr.push(<h2 key={i + "uniqueKey"}>{this.state.list[i]}</h2>);
    }
    return arr;
  }
  
  render() {
    return (
      <div>
        <h1>Grocery List</h1>
        {this.makeList()}
      </div>
    );
  }
}

export default App;