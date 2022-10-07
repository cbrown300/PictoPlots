import React, { useState } from 'react';
import axios from 'axios';
import './Movie.css';

const OMDBKEY = "14c8c5bf"

class Movie extends React.Component {
    state = {
      movieData: [],
      //selectedMovie: 'None'
    };

    componentDidMount() {
      axios.get(`https://www.omdbapi.com/?apikey=${OMDBKEY}&i=${this.props.movieID}&plot=short`)
        .then(res => res.data)
        .then(res => {
          this.setState({ movieData: res });
          //console.log(res);
          //send winning plot to parent
          //if(res.imdbID === this.props.winningID){
          //  this.props.sendPlot(res.Plot);
          //}
      });
    }

    render() {
      const {
        Title,
        Plot,
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
