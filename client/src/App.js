import React, { Component } from 'react';
import './App.css';

const stoicapi = require("stoic-api").random();

class App extends Component {
  render() {
    return (
      <div className="App">
          <h1>{stoicapi}</h1>
      </div>
    );
  }
}

export default App;
