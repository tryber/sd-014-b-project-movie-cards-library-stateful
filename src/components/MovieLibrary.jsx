import React, { Component } from 'react';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';
import MovieList from './MovieList';

class MovieLibrary extends Component {
  render() {
    return (
      <div>
        <SearchBar />
        <AddMovie movies={ movies } />
        <MovieList movies={ movies } />
      </div>
    );
  }
}

export default MovieLibrary;
