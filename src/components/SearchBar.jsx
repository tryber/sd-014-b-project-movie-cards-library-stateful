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
            name="searchText"
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
            name="bookmarkedOnly"
            id="showFavorites"
            checked={ bookmarkedOnly }
            onChange={ onBookmarkedChange }
          />
          Mostrar somente favoritos
        </label>
        <label data-testid="select-input-label" className="h-l" htmlFor="filter-genre">
          Filtrar por gênero:
          <select
            id="filter-genre"
            name="selectedGenre"
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

// className="header-input" - Classe retirada do 'select' para não acusar número máx de linhas

SearchBar.propTypes = {
  searchText: PropTypes.string.isRequired,
  onSearchTextChange: PropTypes.func.isRequired,
  bookmarkedOnly: PropTypes.bool.isRequired,
  onBookmarkedChange: PropTypes.func.isRequired,
  selectedGenre: PropTypes.string.isRequired,
  onSelectedGenreChange: PropTypes.func.isRequired,
};

export default SearchBar;
