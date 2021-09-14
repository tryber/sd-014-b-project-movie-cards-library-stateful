import React, { Component } from 'react';

import SearchBar from './SearchBar';
import MovieList from './MovieList';
import AddMovie from './AddMovie';

import data from '../data';

class MovieLibrary extends Component {

  render() {
    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar />
        <MovieList movies={ data } />
        <AddMovie />
      </div>
    );
  }
}

export default MovieLibrary;
