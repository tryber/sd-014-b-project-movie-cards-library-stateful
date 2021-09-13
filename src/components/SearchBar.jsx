import PropTypes from 'prop-types';
import React from 'react';

class SearchBar extends React.Component {
  render() {
    const { searchText, onSearchTextChange, bookmarkedOnly,
      onBookmarkedChange, selectedGenre, onSelectedGenreChange } = this.props;

    return (
      <form data-testid="search-bar-form">
        <label htmlFor="searchBar" data-testid="text-input-label">
          Inclui o texto:
          <input
            id="searchBar"
            type="text"
            name="searchText"
            data-testid="text-input"
            onChange={ onSearchTextChange }
            value={ searchText }
            required
          />
        </label>
        <label htmlFor="myFavorite" data-testid="checkbox-input-label">
          Mostrar somente favoritos
          <input
            data-testid="checkbox-input"
            type="checkbox"
            name="bookmarkedOnly"
            id="myFavorite"
            onChange={ onBookmarkedChange }
            checked={ bookmarkedOnly }
            required
          />
        </label>
        <label htmlFor="input-genre" data-testid="select-input-label">
          Filtrar por gênero
          <select
            name="selectedGenre"
            id="input-genre"
            data-testid="select-input"
            onChange={ onSelectedGenreChange }
            value={ selectedGenre }
            required
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
  searchText: PropTypes.string,
  onSearchTextChange: PropTypes.func,
  bookmarkedOnly: PropTypes.bool,
  onBookmarkedChange: PropTypes.func,
  selectedGenre: PropTypes.string,
  onSelectedGenreChange: PropTypes.func,
}.isRequired;

export default SearchBar;
