import React from 'react';
import PropTypes from 'prop-types';

class SearchBar extends React.Component {
  render() {
    const { searchText, onSearchTextChange, bookmarkedOnly,
      onBookmarkedChange, selectedGenre, onSelectedGenreChange } = this.props;
    return (
      <section>
        <form data-testid="search-bar-form">
          <label htmlFor="Inclui o texto" data-testid="text-input-label">
            Inclui o texto:
            <input
              data-testid="text-input"
              type="text"
              onChange={ onSearchTextChange }
              value={ searchText }
            />
          </label>
          <label htmlFor="Mostrar somente favoritos" data-testid="checkbox-input-label">
            Mostrar somente favoritos
            <input
              data-testid="checkbox-input"
              checked={ bookmarkedOnly }
              type="checkbox"
              onChange={ onBookmarkedChange }
              value={ searchText }
            />
          </label>
          <label htmlFor="Filtrar por gênero" data-testid="select-input-label">
            Filtrar por gênero
            <select
              data-testid="select-input"
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
      </section>
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
