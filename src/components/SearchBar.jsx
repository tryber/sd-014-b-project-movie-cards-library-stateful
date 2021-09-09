import React, { Component } from 'react';
import PropTypes from 'prop-types';
// htmlFor: Solução para um problema de control da label. Encontrado no StackOverflow.

export default class SearchBar extends Component {
  render() {
    const { searchText, onSearchTextChange, bookmarkedOnly,
      onBookmarkedChange, selectedGenre, onSelectedGenreChange } = this.props;
    return (
      <div>
        <form data-testid="search-bar-form">
          <label htmlFor data-testid="text-input-label">
            Inclui o texto
            <input
              value={ searchText }
              onChange={ onSearchTextChange }
              data-testid="text-input"
            />
          </label>
          <label htmlFor data-testid="checkbox-input-label">
            Mostrar somente favoritos
            <input
              type="checkbox"
              checked={ bookmarkedOnly }
              onChange={ onBookmarkedChange }
              data-testid="checkbox-input"
            />
          </label>
        </form>
      </div>
    );
  }
}

SearchBar.propTypes = {
  searchText: PropTypes.string,
  onSearchTextChange: PropTypes.func,
  bookmarkedOnly: PropTypes.bool,
  onBookmarkedChange: PropTypes.func,
  selectedGenre: PropTypes.string,
  onSelectedGenreChange: PropTypes.func,
}.isRequired;
