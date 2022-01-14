import React, { Component } from 'react';
import logo from './logo.svg';
import Navigation from './components/Navigation';
import './App.css';

class App extends Component {
  render(){
    return (
      <div className="App">
        <Navigation /> 
        <img src={logo} className="App-logo" alt="logo"></img>
      </div>
    )
  }
}

export default App;
