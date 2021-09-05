// implement SearchBar component here
import React from 'react';
import PropTypes from 'prop-types';

class SearchBar extends React.Component {
  render() {
    const {
      filte: {
        searchText,
        onSearchTextChange,
        bookmarkedOnly,
        onBookmarkedChange,
        selectedGenre,
        onSelectedGenreChange,
      },
    } = this.props;
    return (
      <form data-testid="search-bar-form">
        <label htmlFor="input-search" data-testid="text-input-label">
          Inclui o texto:
          <input
            value={ searchText }
            onChange={ onSearchTextChange }
            data-testid="text-input"
            id="input-search"
            type="text"
          />
        </label>
        <label htmlFor="checkbox-search" data-testid="checkbox-input-label">
          Mostrar somente favoritos
          <input
            checked={ bookmarkedOnly }
            onChange={ onBookmarkedChange }
            data-testid="checkbox-input"
            id="checkbox-search"
            type="checkbox"
          />
        </label>
        <label htmlFor="select-search" data-testid="select-input-label">
          Filtrar por gênero
          <select
            value={ selectedGenre }
            onChange={ onSelectedGenreChange }
            id="select-search"
            data-testid="select-input"
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
  filte: PropTypes.shape({
    searchText: PropTypes.string,
    onSearchTextChange: PropTypes.func,
    bookmarkedOnly: PropTypes.bool,
    onBookmarkedChange: PropTypes.func,
    selectedGenre: PropTypes.string,
    onSelectedGenreChange: PropTypes.func,
  }).isRequired,
};

export default SearchBar;
