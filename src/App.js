import React, { Component } from 'react';
import './App.css';
import Menu from './Menu.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Menu />
        </header>
        <p className="App-intro">
        </p>
      </div>
    );
  }
}

export default App;