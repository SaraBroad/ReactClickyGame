import React, { Component } from 'react';
// import logo from './logo.svg';
// import artists from "./artists.json";
import './App.css';
import NavBar from "./components/NavBar";
import Header from "./components/Header";
import PhotoCard from "./components/PhotoCard";

class App extends Component {

  state = {
    artists
  };

  //need handleIncrement
  //.map to create an array of PhotoCard
  //click here to begin
  //indicator of you guessed correctly and incorrectly
  //score set to 0
  //when guess correctly score +1
  //when guess correctly score = 0
  //list high score
  //shuffle through images


  render() {
    return (
      <div>
      <NavBar className="nav">
        <li>Artist Clicky Game</li>
        <li>Click an image to begin</li>
        <li>Score:  || Top Score:  </li>
      </NavBar>
      <Header>
      <h1>Clicky Game!</h1>
      <h2>Click on an image to earn points, but don't click on an image more than once</h2>
      </Header>
      </div>

    );
  }
}

export default App;
