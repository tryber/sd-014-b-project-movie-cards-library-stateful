import React, { Component } from 'react';
import '../App.css';
import PropTypes from 'prop-types';

class SearchBar extends Component {
  render() {
    const { searchText, onSearchTextChange, bookmarkedOnly,
      onBookmarkedChange, selectedGenre, onSelectedGenreChange } = this.props;
    return (
      <form data-testid="search-bar-form">
        { searchText + onSearchTextChange + bookmarkedOnly
        + onBookmarkedChange + selectedGenre + onSelectedGenreChange }
      </form>
    );
  }
}

SearchBar.propTypes = {
  searchText: PropTypes.string,
  onSearchTextChange: PropTypes.callback,
  bookmarkedOnly: PropTypes.boolean,
  onBookmarkedChange: PropTypes.callback,
  selectedGenre: PropTypes.string,
  onSelectedGenreChange: PropTypes.callback,
}.isRequired;

export default SearchBar;
