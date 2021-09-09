// implement SearchBar component here
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
      // Retorna o Forms Com input Text, Checkbox e Selected para os gêneros
      <form action="" data-testid="search-bar-form">
        { /* Cria um searchbar para buscar filmes por titulo e descrição; */ }
        <label htmlFor="searchText" data-testid="text-input-label">
          <input
            data-testid="text-input"
            value={ searchText }
            id="searchText"
            onChange={ onSearchTextChange }
          />
          Inclui o texto:
        </label>
        <label htmlFor="bookmarkedOnly" data-testid="checkbox-input-label">
          <input
            type="checkbox"
            data-testid="checkbox-input"
            id="bookmarkedOnly"
            onChange={ bookmarkedOnly }
            checked={ onBookmarkedChange }
          />
          Mostrar somente favoritos
        </label>
        <label htmlFor="selected" data-testid="select-input-label">
          <select
            value={ selectedGenre }
            id="selected"
            data-testid="select-input"
            onChange={ onSelectedGenreChange }
          >
            <option value="" data-testid="select-option">Todos</option>
            <option value="action" data-testid="select-option">Ação</option>
            <option value="comedy" data-testid="select-option">Comédia</option>
            <option value="thriller" data-testid="select-option">Suspense</option>
          </select>
          Filtrar por gênero
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
  selectedGenre: PropTypes.string.isRequired,
  onSelectedGenreChange: PropTypes.func.isRequired,
};
