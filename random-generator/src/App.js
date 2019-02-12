import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
            <h2>Let me decide for you</h2>
            <button className="btn-large" type="button">Let's get random</button>
        </header>
      </div>
    );
  }
}

export default App;
