import React from 'react';
import PropTypes from 'prop-types';
import OptionFilter from './OptionFilter';

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
      <form data-testid="search-bar-form" className="header-container">
        <label data-testid="text-input-label" className="h-l" htmlFor="find-text">
          Inclui o texto:
          <input
            data-testid="text-input"
            className="header-input"
            id="find-text"
            type="text"
            value={ searchText }
            onChange={ onSearchTextChange }
          />
        </label>
        <label data-testid="checkbox-input-label" className="h-l" htmlFor="showFavorites">
          <input
            data-testid="checkbox-input"
            className="input-checkbox"
            type="checkbox"
            name="showFavorites"
            id="showFavorites"
            checked={ bookmarkedOnly }
            onChange={ onBookmarkedChange }
          />
          Mostrar somente favoritos
        </label>
        <label data-testid="select-input-label" className="h-l" htmlFor="filter-genre">
          Filtrar por gênero:
          <select
            className="header-input"
            id="filter-genre"
            value={ selectedGenre }
            onChange={ onSelectedGenreChange }
            data-testid="select-input"
          >
            <OptionFilter />
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
