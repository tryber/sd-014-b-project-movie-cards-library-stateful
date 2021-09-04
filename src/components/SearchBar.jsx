import React from 'react';
import PropTypes from 'prop-types';

class SearchBar extends React.Component {
  render() {
    const { searchText, onSearchTextChange, bookmarkedOnly, onBookmarkedChange,
      selectedGenre,
      onSelectedGenreChange } = this.props;

    return (
      <form data-testid="search-bar-form">
        <section>
          <label htmlFor="searchBar" data-testid="text-input-label">
            Inclui o texto:
            <input
              data-testid="text-input"
              name="searchBar"
              id="searchBar"
              type="text"
              value={ searchText }
              onChange={ onSearchTextChange }
              required
            />
          </label>
          <label htmlFor="favoritos" data-testid="checkbox-input-label">
            Mostrar somente favoritos
            <input
              data-testid="checkbox-input"
              name="favoritos"
              id="favoritos"
              type="checkbox"
              checked={ bookmarkedOnly }
              onChange={ onBookmarkedChange }
              required
            />
          </label>
          <label htmlFor="genre" data-testid="select-input-label">
            Filtrar por gênero
            <select
              id="genre"
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

// searchText, uma string
// onSearchTextChange, uma callback
// bookmarkedOnly, um boolean
// onBookmarkedChange, uma callback
// selectedGenre, uma string
// onSelectedGenreChange, uma callback

export default SearchBar;
