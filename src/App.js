import React, { Component } from 'react';
import './App.css';
import Header from './header/Header.js';
import Nav from './nav/Nav.js';
//import Main from './main/Main.js';

class App extends Component {
  render() {
    return (
        <>
          <Header />
          <Nav />
        </>
    );
  }
}

export default App;