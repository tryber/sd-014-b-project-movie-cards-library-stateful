// implement MovieLibrary component here
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

class MovieLibrary extends Component {
  constructor() {
    super(props);
  }

  render() {
    const { movies } = this.props;
    const propsSearch = {
      searchText: '',
      onSearchTextChange: () => {},
      bookmarkedOnly: false,
      onBookmarkedChange: () => {},
      selectedGenre: '',
      onSelectedGenreChange: () => {},
    };

    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar prop={ propsSearch } />
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
