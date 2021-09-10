import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { SearchBar } from './SearchBar';
import { AddMovie } from './AddMovie';

export class MovieLibrary extends Component {
  constructor() {
    super();

    const { movies } = this.props;
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies,
    };
  }

  render() {
    const {searchText, bookmarkedOnly, selectedGenre, movies} = this.state;
    return (
      <div>
        <SearchBar />
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
