import React from 'react';
import PropTypes from 'prop-types';

class SearchBar extends React.Component {
  render() {
    const { onSearchTextChange, searchText, onBookmarkedChange, bookmarkedOnly,
      onSelectedGenreChange, selectedGenre } = this.props;
    return (
      <form data-testid="search-bar-form">
        <label htmlFor="searchText" data-testid="text-input-label">
          Inclui o texto:
          <input
            name="searchText"
            data-testid="text-input"
            value={ searchText }
            onChange={ onSearchTextChange }
            type="text"
          />
        </label>
        <label htmlFor="bookmarkedOnly" data-testid="checkbox-input-label">
          Mostrar somente favoritos:
          <input
            name="bookmarkedOnly"
            data-testid="checkbox-input"
            type="checkbox"
            onChange={ onBookmarkedChange }
            checked={ bookmarkedOnly }
          />
        </label>
        <label htmlFor="selectedGenre" data-testid="select-input-label">
          Filtrar por gênero:
          <select
            name="selectedGenre"
            data-testid="select-input"
            onChange={ onSelectedGenreChange }
            value={ selectedGenre }
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
