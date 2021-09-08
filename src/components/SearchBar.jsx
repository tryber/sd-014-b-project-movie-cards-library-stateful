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
        <label htmlFor="search-text" data-testid="text-input-label">
          Inclui o texto:
          <input
            id="search-text"
            data-testid="text-input"
            type="text"
            value={ searchText }
            onChange={ onSearchTextChange }
          />
        </label>
        <label htmlFor="show-favorite" data-testid="checkbox-input-label">
          Mostrar somente favoritos
          <input
            id="show-favorite"
            data-testid="checkbox-input"
            type="checkbox"
            checked={ bookmarkedOnly }
            onChange={ onBookmarkedChange }
          />
        </label>
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
