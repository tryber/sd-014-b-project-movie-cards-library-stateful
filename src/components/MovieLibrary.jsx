// implement MovieLibrary component here
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

class MovieLibrary extends Component {
  constructor() {
    super();

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
    };
  }

  resetState = (state) => {
    console.log(state);
  }

  onSearchTextChange = ({ target }) => {
    const { name } = target;
    this.setState({
      [name]: target.value,
    });
  }

  onBookmarkedChange = ({ target }) => {
    const { name } = target;
    this.setState({
      [name]: target.checked,
    });
  }

  render() {
    const { movies } = this.props;
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    const propsSearch = {
      searchText,
      onSearchTextChange: this.onSearchTextChange,
      bookmarkedOnly,
      onBookmarkedChange: this.onBookmarkedChange,
      selectedGenre,
      onSelectedGenreChange: this.onSearchTextChange,
    };

    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar { ...propsSearch } />
        <MovieList movies={ movies } />
        <AddMovie onClick={ this.resetState } />
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
