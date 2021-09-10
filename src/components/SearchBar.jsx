// implement SearchBar component here
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SearchBar extends Component {
  render() {
    const { searchText, onSearchTextChange,
      bookmarkedOnly, onBookmarkedChange,
      selectedGenre, onSelectedGenreChange } = this.props;
    return (
      <form data-testid="search-bar-form">
        {/* Label do input */}
        <label htmlFor="textId" data-testid="text-input-label">
          Inclui o texto
          <input
            id="textId"
            data-testid="text-input"
            value={ searchText }
            onChange={ onSearchTextChange }
          />
        </label>
        {/* Label do Checkbox */}
        <label htmlFor="inputCheckbox" data-testid="checkbox-input-label">
          Mostrar somente favoritos
          <input
            data-testid="checkbox-input"
            id="inputCheckbox"
            type="checkbox"
            checked={ bookmarkedOnly }
            onChange={ onBookmarkedChange }
          />
        </label>
        {/* Label do select */}
        <label
          htmlFor="selectType"
          data-testid="select-input-label"
        >
          Filtrar por gênero
          <select
            data-testid="select-input"
            id="selectType"
            value={ selectedGenre }
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
  searchText: PropTypes.string.isRequired,
  onSearchTextChange: PropTypes.func.isRequired,
  bookmarkedOnly: PropTypes.bool.isRequired,
  onBookmarkedChange: PropTypes.func.isRequired,
  selectedGenre: PropTypes.string.isRequired,
  onSelectedGenreChange: PropTypes.func.isRequired,
};

export default SearchBar;
