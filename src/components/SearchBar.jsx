// implement SearchBar component here
import React from 'react';
import PropTypes from 'prop-types';

class SearchBar extends React.Component {
  render() {
    const { searchText, onSearchTextChange, bookmarkedOnly, onBookmarkedChange,
      selectedGenre, onSelectedGenreChange } = this.props;
    return (
      <section>
        <form data-testid="search-bar-form">
          <label htmlFor="text-input" data-testid="text-input-label">
            Inclui o texto:
            <input
              value={ searchText }
              onChange={ onSearchTextChange }
              data-testid="text-input"
              type="text"
            />
          </label>
          <label htmlFor="checkbox-input" data-testid="checkbox-input-label">
            Mostrar somente favoritos
            <input
              data-testid="checkbox-input-label"
              type="checkbox"
              onChange={ onBookmarkedChange }
              checked={ bookmarkedOnly }
            />
          </label>
          <label htmlFor="select-input-label" data-testid="select-input-label">
            Filtrar por gênero
            <select
              htmlFor="select-input"
              data-testid="select-input-label"
              value={ selectedGenre }
              onChange={ onSelectedGenreChange }
            >
              <option data-testid="select-input" value="">Todos</option>
              <option data-testid="select-input" value="action">Ação</option>
              <option data-testid="select-input" value="comedy">Comédia</option>
              <option data-testid="select-input" value="thriller">Suspense</option>
            </select>
          </label>
        </form>
      </section>
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
