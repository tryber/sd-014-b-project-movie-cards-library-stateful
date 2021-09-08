// implement SearchBar component here
import React from 'react';
import PropTypes from 'prop-types';

class SearchBar extends React.Component {
  render() {
    const { searchText,
      onSearchTextChange,
      bookmarkedOnly,
      onBookmarkedChange,
      selectedGenre,
      onSelectedGenreChange } = this.props;

    return (
      <form data-testid="search-bar-form">
        <label htmlFor="searchText" data-testid="text-input-label">
          Inclui o texto:
          <input
            name="searchText"
            data-testid="text-input"
            type="text"
            value={ searchText }
            onChange={ onSearchTextChange }
          />
        </label>
        <label htmlFor="bookmarked" data-testid="checkbox-input-label">
          <input
            type="checkbox"
            name="bookmarkedOnly"
            onChange={ onBookmarkedChange }
            checked={ bookmarkedOnly }
            data-testid="checkbox-input"
          />
          Mostrar somente favoritos
        </label>
        <label htmlFor="selectGenre" data-testid="select-input-label">
          Filtrar por gênero
          <select
            name="selectedGenre"
            value={ selectedGenre }
            onChange={ onSelectedGenreChange }
            data-testId="select-input"
          >
            <option data-testId="select-option" value="">Todos</option>
            <option data-testId="select-option" value="action">Ação</option>
            <option data-testId="select-option" value="comedy">Comédia</option>
            <option data-testId="select-option" value="thriller">Suspense</option>
          </select>
        </label>
      </form>
    );
  }
}

SearchBar.propTypes = {
  searchText: PropTypes.string.isRequired,
  onSearchTextChange: PropTypes.func.isRequired,
  bookmarkedOnly: PropTypes.bool,
  onBookmarkedChange: PropTypes.func.isRequired,
  selectedGenre: PropTypes.string.isRequired,
  onSelectedGenreChange: PropTypes.func.isRequired,
};

SearchBar.defaultProps = {
  bookmarkedOnly: false,
};

export default SearchBar;
