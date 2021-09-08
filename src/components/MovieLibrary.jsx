import PropTypes from 'prop-types';
import React, { Component } from 'react';
import AddMovie from './AddMoviesComp/AddMovie';
import MovieList from './MovieList';
import SearchBar from './SearchBar';

class MovieLibrary extends Component {
  render() {
    const { movies } = this.props;
    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar />
        <MovieList movies={ movies } />
        <AddMovie />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.object,
  ).isRequired,
};

export default MovieLibrary;
