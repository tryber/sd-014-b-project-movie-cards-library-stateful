/* eslint-disable max-lines-per-function */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SearchBar extends Component {
  render() {
    const { searchText, onSearchTextChange, bookmarkedOnly,
      onBookmarkedChange, selectedGenre, onSelectedGenreChange } = this.props;

    return (
      <form data-testid="search-bar-form">
        <label data-testid="text-input-label" htmlFor="seachBar">
          Inclui o texto:
          <input
            data-testid="text-input"
            name="seachBar"
            value={ searchText }
            id="seachBar"
            type="text"
            onChange={ onSearchTextChange }
            required
          />
        </label>

        <label data-testid="checkbox-input-label" htmlFor="checkbox">
          Mostrar somente favoritos
          <input
            data-testid="checkbox-input"
            id="checkbox"
            type="checkbox"
            onChange={ onBookmarkedChange }
            checked={ bookmarkedOnly }
            required
          />
        </label>

        <label data-testid="select-input-label" htmlFor="selectGenre">
          Filtrar por gênero
          <select
            data-testid="select-input"
            name="selectGenre"
            value={ selectedGenre }
            id="selectGenre"
            onChange={ onSelectedGenreChange }
          >
            <option data-testid="select-option" value="">Todos</option>
            <option data-testid="select-option" value="action">Ação</option>
            <option data-testid="select-option" value="comedy">Comédia</option>
            <option data-testid="select-option" value="thriller">Suspense</option>
          </select>
        </label>
      </form>
    );
  }
}

SearchBar.propTypes = {
  searchText: PropTypes.string.isRequired.isRequired,
  onSearchTextChange: PropTypes.func.isRequired,
  bookmarkedOnly: PropTypes.bool.isRequired,
  onBookmarkedChange: PropTypes.func.isRequired,
  selectedGenre: PropTypes.string.isRequired,
  onSelectedGenreChange: PropTypes.func.isRequired,
};

export default SearchBar;
