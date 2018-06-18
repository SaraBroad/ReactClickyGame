import React, { Component } from 'react';
import NavBar from "./components/NavBar";
import Header from "./components/Header";
import PhotoCard from "./components/PhotoCard";
import Wrapper from "./components/Wrapper"
import artists from "./artists.json";
import './App.css';

let score = 0;
let topScore = 0;
let clickMessage = "";

 //need handleIncrement
  //click here to begin
  //indicator of you guessed correctly and incorrectly
  //score set to 0
  //when guess correctly score +1
  //when guess correctly score = 0
  //list high score

  //shuffle through images

class App extends Component {

  state = {
    score,
    topScore,
    artists: artists
  };

  shuffleArtists = artists => {
    for (let i = artists.length -1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [artists[i], arists[j]] = [artists[j], artists[i]];
    }
    return artists;
  }

  setClicked = id => {
    const artists = this.state.artists;
    const artistClicked = this.state.artists.filter(artist => artist.id === id);
    if (artistClicked(0).clicked) {

      guesses = 0
      message = "You guessed incorrectly!"

    //   why?
    //   for (let i = 0 ; i < matches.length ; i++){
    //     matches[i].clicked = false;
    // }

        // We always use the setState method to update a component's state
      // this.setState({ count: this.state.count + 1 });

      this.setState({score});
      this.setState({topScore});
      this.setState({message});

    } else {
      artistClicked[0].clicked = true
      score++
      message = "You guessed correctly!"
    }


  };

 






  render() {
    return (
      <div>
        <NavBar className="nav">
          <li>Artist Clicky Game</li>
          <li>{this.state.clickMessage}</li>
          <li>Score: {this.state.score} || Top Score: {this.state.topScore}</li>
        </NavBar>
        <Header>
          <h1>Clicky Game!</h1>
          <h2>Click on an image to earn points, but don't click on an image more than once</h2>
        </Header>
        <Wrapper>
        {this.state.artists.map(artist => (
          <PhotoCard
            id={artist.id}
            key={artist.id}
            name={artist.name}
            image={artist.image}
          />
        ))}
        </Wrapper>
      </div>

    );
  }
}

export default App;
