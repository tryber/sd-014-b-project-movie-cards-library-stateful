import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';
import MovieList from './MovieList';

class MovieLibrary extends Component {
  constructor() {
    super();

    this.state = {
      searchText: '',
    };
  }

  render() {
    const { searchText } = this.state;
    const { movies } = this.props;
    return (
      <div>
        <SearchBar searchText={ searchText } />
        <AddMovie />
        <MovieList movies={ movies } />
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
