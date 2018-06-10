import React, { Component } from 'react';
import './App.css';
import Menu from './Menu.js'
import Intro from './Intro.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Menu />
          <Intro />
        </header>
      </div>
    );
  }
}

export default App;
