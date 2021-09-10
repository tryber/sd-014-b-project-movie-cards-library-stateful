import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class SearchBar extends Component {
  render() {
    const {
      searchText,
      onSearchTextChange,
      bookmarkedOnly,
      onBookmarkedChange,
      selectedGenre,
      onSelectedGenreChange,
    } = this.props;

    return (
      <form data-testid="search-bar-form">
        <label data-testid="text-input-label" htmlFor="search-text">
          <p>Inclui o texto:</p>
          <input
            data-testid="text-input"
            id="search-text"
            type="text"
            onChange={ onSearchTextChange }
            value={ searchText }
          />
        </label>
        <label data-testid="checkbox-input-label" htmlFor="checkbox-input">
          <p> Mostrar somente favoritos </p>
          <input
            type="checkbox"
            checked={ bookmarkedOnly }
            onChange={ onBookmarkedChange }
            data-testid="checkbox-input"
            id="checkbox-input"
          />
        </label>
        <label data-testid="select-input-label" htmlFor="select-input">
          <p>Filtrar por gênero</p>
          <select
            data-testid="select-input"
            id="select-input"
            value={ selectedGenre }
            onChange={ onSelectedGenreChange }
          >
            <option value="" data-testid="select-option">Todos</option>
            <option value="action" data-testid="select-option">Ação</option>
            <option value="comedy" data-testid="select-option">Comédia</option>
            <option value="thriller" data-testid="select-option">Suspense</option>
          </select>
        </label>
      </form>
    );
  }
}

SearchBar.propTypes = {
  searchText: PropTypes.func.isRequired,
  onSearchTextChange: PropTypes.func.isRequired,
  onBookmarkedChange: PropTypes.func.isRequired,
  bookmarkedOnly: PropTypes.func.isRequired,
  selectedGenre: PropTypes.func.isRequired,
  onSelectedGenreChange: PropTypes.func.isRequired,
};
