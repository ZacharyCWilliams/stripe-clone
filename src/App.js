import React, { Component } from 'react';
import './App.css';
import Menu from './Menu.js'
import Intro from './Intro.js'
import Gradient from './Gradient.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Gradient />
          <Menu />
          <Intro />
        </header>
      </div>
    );
  }
}

export default App;
