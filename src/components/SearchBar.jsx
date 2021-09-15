import React from 'react';
import PropTypes from 'prop-types';

class SearchBar extends React.Component {
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
        <label htmlFor="textFilter" data-testid="text-input-label">
          Inclui o texto
          <input
            value={ searchText }
            onChange={ onSearchTextChange }
            type="text"
            id="textFilter"
            data-testid="text-input"
          />
        </label>
        <label htmlFor="bookmarkedCheck" data-testid="checkbox-input-label">
          Mostrar somente favoritos
          <input
            checked={ bookmarkedOnly }
            onChange={ onBookmarkedChange }
            type="checkbox"
            id="bookmarkedCheck"
            data-testid="checkbox-input"
          />
        </label>
        <label htmlFor="genreFilter" data-testid="select-input-label">
          Filtrar por gênero
          <select
            value={ selectedGenre }
            onChange={ onSelectedGenreChange }
            id="genreFilter"
            data-testid="select-input"
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
  searchText: PropTypes.string,
  onSearchTextChange: PropTypes.func,
  bookmarkedOnly: PropTypes.bool,
  onBookmarkedChange: PropTypes.func,
  selectedGenre: PropTypes.string,
  onSelectedGenreChange: PropTypes.func,
}.isRequired;

export default SearchBar;
