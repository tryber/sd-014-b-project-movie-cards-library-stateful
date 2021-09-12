// implement MovieLibrary component here
import React, { Component } from 'react';
import AddMovie from './AddMovie';
import MovieList from './MovieList';
import SearchBar from './SearchBar';

class MovieLibrary extends Component {

  render() {
    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar />
        <MovieList movies={ this.props.movies } />
        <AddMovie />
      </div>
    );
  }
}

export default MovieLibrary;
