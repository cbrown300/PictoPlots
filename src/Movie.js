import React from 'react';
import axios from 'axios';

const OMDBKEY = "14c8c5bf"
const WINNINGMOVIEID = "tt0088763"

class Movie extends React.Component {
    state = {
      movieData: {},
      selectedMovie: 'None'
    };

    componentDidMount() {
      axios.get(`https://www.omdbapi.com/?apikey=${OMDBKEY}&i=${this.props.movieID}&plot=short`)
        .then(res => res.data)
        .then(res => {
          this.setState({ movieData: res });
      });
    }

    setSelectedMovie(id) {
      this.setState({selectedMovie: id})
    }

    //style = {{background: 'none', border: 'none'}} onClick = {this.setState({selectedMovie: this.imdbID})}
    render() {
      const {
        Title,
        Plot,
        imdbID
      } = this.state.movieData;

      return (
        <div>
          <div>
            <div>
              <button onClick = {this.setSelectedMovie(imdbID)}>{Title}</button>
            </div>
            {imdbID === WINNINGMOVIEID && (
              <p>{Plot && Plot.substr(0, 350)}</p>
            )}
          </div>
        </div>
      );
    }
}

export default Movie;
