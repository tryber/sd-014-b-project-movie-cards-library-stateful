import React from 'react';
import PropTypes from 'prop-types';
import SearchMovieText from './SearchMovieText';

class SearchBar extends React.Component {
  render() {
    const { searchText, onSearchTextChange, bookmarkedOnly,
      onBookmarkedChange, selectedGenre, onSelectedGenreChange } = this.props;
    return (
      <form data-testid="search-bar-form">
        <SearchMovieText
          searchText={ searchText }
          onSearchTextChange={ onSearchTextChange }
        />
        <div className="mb-3 form-check">
          <input
            className="form-check-input"
            type="checkbox"
            name="bookmarkedOnly"
            checked={ bookmarkedOnly }
            onChange={ onBookmarkedChange }
            data-testid="checkbox-input"
          />
          <label
            className="form-check-label"
            data-testid="checkbox-input-label"
            htmlFor="checkbox-input"
          >
            Mostrar somente favoritos
          </label>
        </div>
        <div>
          <label
            data-testid="select-input-label"
            htmlFor="select-input"
            className="form-label"
          >
            Filtrar por gênero
          </label>
          <select
            className="form-select"
            value={ selectedGenre }
            name="selectedGenre"
            onChange={ onSelectedGenreChange }
            data-testid="select-input"
          >
            <option value="" data-testid="select-option">Todos</option>
            <option value="action" data-testid="select-option">Ação</option>
            <option value="comedy" data-testid="select-option">Comédia</option>
            <option value="thriller" data-testid="select-option">Suspense</option>
          </select>
        </div>
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
