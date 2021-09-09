// implement SearchBar component here
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SearchBar extends Component {
  render() {
    const { searchText, onSearchTextChange } = this.props;
    const { bookmarkedOnly, onBookmarkedChange } = this.props;

    // selectedGenre, onSelectedGenreChange

    return (
      <form data-testid="search-bar-form">
        <label htmlFor="textSearch" data-testid="text-input-label">
          Inclui o texto:
          <input
            type="text"
            name="inclueTexto"
            id="textSearch"
            data-testid="text-input"
            value={ searchText }
            onChange={ onSearchTextChange }
          />
        </label>
        <label htmlFor="favoriteSearch" data-testid="checkbox-input-label">
          Mostrar somente favoritos
          <input
            type="checkbox"
            name="favoritos"
            id="favoriteSearch"
            data-testid="checkbox-input"
            checked={ bookmarkedOnly }
            onChange={ onBookmarkedChange }
          />
        </label>
      </form>
    );
  }
}

SearchBar.propTypes = {
  searchText: PropTypes.string.isRequired,
  onSearchTextChange: PropTypes.func.isRequired,
  bookmarkedOnly: PropTypes.bool.isRequired,
  onBookmarkedChange: PropTypes.func.isRequired,
};

export default SearchBar;
