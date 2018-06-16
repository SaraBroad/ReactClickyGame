import React, { Component } from 'react';
// import logo from './logo.svg';
// import artists from "./artists.json";
import './App.css';
import NavBar from "./components/NavBar";
import Header from "./components/Header";

class App extends Component {

  // state = {
  //   artists
  // };
  render() {
    return (
      <NavBar className="nav">
        <li>Artist Clicky Game</li>
        <li>Click an image to begin</li>
        <li>Score:  || Top Score:  </li>
      </NavBar>

    );
  }
}

export default App;
