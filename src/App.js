import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import HelloComponent from './HelloComponent.js';
import StateComponent from './StateComponent.js';
import IncrementComponent from './IncrementComponent.js';
import SumComponent from './SumConponent.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div>
            <HelloComponent exampleProp ='Hello' />
            <HelloComponent exampleProp ='Hi' />
            <HelloComponent exampleProp ='Hey' />
            <StateComponent exampleText/>
            <IncrementComponent exampleNumber/>
            <SumComponent sum/>
            
          </div>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
          </a>
        </header>
      </div>
    );
  }
}

export default App;
