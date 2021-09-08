// implement SearchBar component here
import React, { Component } from 'react';
// import PropTypes from 'prop-types';

class SearchBar extends Component {
  render() {
    // const { searchText, onSearchTextChange } = this.props;

    // bookmarkedOnly, onBookmarkedChange, selectedGenre, onSelectedGenreChange

    return (
      <form data-testid="search-bar-form">
        <label htmlFor="textSearch" data-testid="text-input-label">
          Inclui o texto:
          <input
            id="textSearch"
            data-testid="text-input"
            value={ searchText }
            onChange={ onSearchTextChange }
          />
        </label>
      </form>
    );
  }
}

export default SearchBar;
