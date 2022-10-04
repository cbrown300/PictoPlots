import './App.css';
import React from 'react';
import axios from 'axios';
import Movie from './Movie';

const OMDBKEY = "14c8c5bf"
//const PIXABAYKEY = "17228303-ec297062a3db99e52d960db51"
const WINNINGMOVIEID = "tt0088763"

class App extends React.Component {
  state = {
    moviesList: ['tt0088763','tt0076759','tt0103064','tt0078748','tt0133093','tt0082971','tt0096251','tt0110912','tt0137523','tt7286456']
  };

  //{Movie.selectedMovie}
  render() {
    const { moviesList } = this.state;
    return (
      <div>
        <h1>Picto Plots</h1>
        {moviesList.map(movie => (
          <Movie movieID={movie} key={movie} />
        ))}
        <p>SelectedMovie: </p>
      </div>
    );
  }
}

export default App;
