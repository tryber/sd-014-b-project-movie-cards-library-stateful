import React from 'react';
import PropTypes from 'prop-types';
import SearchText from './SearchText';

class SearchBar extends React.Component {
  render() {
    const { searchText, onSearchTextChange,
      bookmarkedOnly,
      selectedGenre, onSelectedGenreChange,
      onBookmarkedChange } = this.props;
    return (
      <form data-testid="search-bar-form">
        <div>
          <SearchText value={ searchText } onChange={ onSearchTextChange } />
        </div>
        <div className="col">
          <label htmlFor="favs" data-testid="checkbox-input-label">
            Mostrar somente favoritos
            <input
              type="checkbox"
              id="favs"
              name="bookmarkedOnly"
              data-testid="checkbox-input"
              checked={ bookmarkedOnly }
              onChange={ onBookmarkedChange }
            />
          </label>
        </div>
        <div className="col">
          <label htmlFor="genre" data-testid="select-input-label">
            Filtrar por gênero
            <select
              data-testid="select-input"
              id="genre"
              name="selectedGenre"
              value={ selectedGenre }
              onChange={ onSelectedGenreChange }
            >
              <option value="" data-testid="select-option">Todos</option>
              <option value="action" data-testid="select-option">Ação</option>
              <option value="comedy" data-testid="select-option">Comédia</option>
              <option value="thriller" data-testid="select-option">Suspense</option>
            </select>
          </label>
        </div>
      </form>
    );
  }
}

SearchBar.propTypes = {
  searchText: PropTypes.string.isRequired,
  bookmarkedOnly: PropTypes.bool.isRequired,
  onSearchTextChange: PropTypes.func.isRequired,
  selectedGenre: PropTypes.string.isRequired,
  onSelectedGenreChange: PropTypes.func.isRequired,
  onBookmarkedChange: PropTypes.func.isRequired,
};

export default SearchBar;
