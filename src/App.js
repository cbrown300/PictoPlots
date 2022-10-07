import './App.css';
import React from 'react';
import axios from 'axios';
import Movie from './Movie';
import Image from './Image';
import PopupMessage from "./PopupMessage";

const OMDBKEY = "14c8c5bf"

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      moviesList: ['tt0088763','tt0082694','tt0088247','tt0090605','tt0090728','tt0096928','tt0096251','tt0093870','tt0087995','tt0080745'],
      plot: '',
      shortPlot: [],
      winner: '',
      selected: ''
    };
  }

  //onclick function to change current selection
  selectedMovieChanged = (val) => {
    this.setState({selected: val});
  }

  //get plot and shorten it for pictures
  getPlot = (val) => {
    this.setState({plot: val});
    //remove redundant words and characters from plot for images
    let plotArray = this.state.plot.toLowerCase().split(" ");
    let removeWords = ['the', 'is', 'a', 'as', 'to', 'who', 'and', 'of', 'an', 'from', 'his', 'her', 'by', 'he', 'she', 'on', 'in', 'into', '-', 'for', 'has', 'its'];
    let resultPlot = plotArray.filter(word => !removeWords.includes(word));
    this.setState({shortPlot: resultPlot});
  }

  //select random winning movieID
  generateRandomWinner = () => {
    let index = Math.floor(Math.random() * this.state.moviesList.length);
    let winningID = this.state.moviesList[index];
    this.setState({winner: winningID});
  }

  componentDidMount() {
    this.generateRandomWinner();
    //get the winning movie's plot
    this.state.moviesList.map(movie => {
      axios.get(`https://www.omdbapi.com/?apikey=${OMDBKEY}&i=${movie}&plot=short`)
        .then(res => res.data)
        .then(res => {
          if(res.imdbID === this.state.winner){
            this.getPlot(res.Plot);
          }
      });
    });
  }

  render() {
    return (
      <div class="App">
        <div class="header-text">80's Sci-Fi Picto Plots</div>  
        <div>
          {this.state.selected !== '' && (
            <div>
              <PopupMessage selected={this.state.selected}
                            winner={this.state.winner}
                            resetSelection={this.selectedMovieChanged}/>
            </div>
          )}
        </div>
        <p>Guess the Movie Title Based on Randomly Generated Pictures of the Movie's Plot</p>
        <div class="images">
          {this.state.shortPlot.length > 1 && (
            this.state.shortPlot.map(word => (
            <Image plotWord={word} key={word} />
          )))}
        </div>
        <br />
        <div class="movies">
          {this.state.moviesList.map(movie => (
            <Movie movieID={movie}
                  setSelected={this.selectedMovieChanged}
                  sendPlot={this.getPlot}
                  winningID = {this.state.winner}
                  key={movie}
                  class="button"/>
          ))}
        </div>
      </div>
    );
  }
}

export default App;
