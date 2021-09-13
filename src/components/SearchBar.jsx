/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
/* import Select from './Select'; */

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
        <label htmlFor="search" data-testid="select-input-label">
          Inclui o texto:
          <input
            value={ searchText }
            onChange={ onSearchTextChange }
            data-testid="text-input"
          />
        </label>
        <section>
          <label htmlFor="checkbox-search" data-testid="checkbox-input-label">
            Mostrar somente favoritos
            <input
              checked={ bookmarkedOnly }
              onChange={ onBookmarkedChange }
              data-testid="checkbox-input"
              type="checkbox"
              id="checkbox-search"
              name="bookmarkedOnly"
            />
          </label>
        </section>
        <section>
          <label data-testid="select-input-label" htmlFor="genre-filter">
            Filtrar por genero
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
        </section>
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
