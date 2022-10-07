import React from 'react';
import axios from 'axios';

const OMDBKEY = "14c8c5bf"

class Movie extends React.Component {
    state = {
      movieData: [],
    };

    componentDidMount() {
      axios.get(`https://www.omdbapi.com/?apikey=${OMDBKEY}&i=${this.props.movieID}&plot=short`)
        .then(res => res.data)
        .then(res => {
          this.setState({ movieData: res });
      });
    }

    render() {
      const {
        Title,
        imdbID
      } = this.state.movieData;

      return (
        <>
        <div>
            <button class="button" onClick = {() => this.props.setSelected(imdbID)}>
              <span class="text">
                {Title}
              </span>
            </button>
        </div>
        </>
      );
    }
}

export default Movie;
