import './App.css';
import React from 'react';
import axios from 'axios';
import Movie from './Movie';
import Image from './Image';

const OMDBKEY = "14c8c5bf"
//const PIXABAYKEY = "17228303-ec297062a3db99e52d960db51"

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      moviesList: ['tt0088763','tt0076759','tt0103064','tt0078748','tt0133093','tt0082971','tt0096251','tt0110912','tt0137523','tt7286456'],
      //moviesList: ['tt0088763','tt0076759'],
      plot: '',
      shortPlot: [],
      winner: '',
      selected: ''
    };
  }

  //onclick function to change current selection
  selectedMovieChanged = (val) => {
    this.setState({selected: val});
    console.log(val);
  }

  //onclick function to check for correct guess
  compareSelection = () => {
    if(this.state.selected === this.state.winner){
      console.log("winner");
    }else{
      console.log("loser");
    }
  }

  //get plot and shorten it for pictures
  getPlot = (val) => {
    this.setState({plot: val});
    console.log(val);
    //remove redundant words and characters from plot for images
    let plotArray = this.state.plot.toLowerCase().split(" ");
    let removeWords = ['the', 'is', 'a', 'as', 'to', 'who', 'and', 'of', 'an', 'from', 'his', 'her', 'by', 'he', 'she', 'on', 'in', 'into'];
    let resultPlot = plotArray.filter(word => !removeWords.includes(word));
    this.setState({shortPlot: resultPlot});
  }

  //select random winning movieID
  generateRandomWinner = () => {
    let index = Math.floor(Math.random() * this.state.moviesList.length);
    let winningID = this.state.moviesList[index];
    this.setState({winner: winningID});
    console.log('Winner ' + winningID);
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
      <div>
        <h1>Picto Plots</h1>
        <p>{this.state.plot}</p>
        <div>
          {this.state.shortPlot.length > 1 && (
            this.state.shortPlot.map(word => (
            <Image plotWord={word} key={word} />
          )))}
        </div>
        <div>
          {this.state.moviesList.map(movie => (
            <Movie movieID={movie}
                  setSelected={this.selectedMovieChanged}
                  sendPlot={this.getPlot}
                  winningID = {this.state.winner}
                  key={movie} />
          ))}
        </div>
        <p>SelectedMovie: {this.state.selected}</p>
        <button onClick = {this.compareSelection}>Confirm Selection</button>
      </div>
    );
  }
}

export default App;
