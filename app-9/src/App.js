import React, { Component } from 'react';
import routes from './routes';
import {Link} from 'react-router-dom';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Link to="/">Home</Link>
        <Link to="/signup">Sign Up</Link>
        <Link to="/details">Details</Link>
        {routes}
      </div>
    );
  }
}

export default App;
