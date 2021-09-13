import React from 'react';
import PropTypes from 'prop-types';

import SelectedGenre from './SelectedGenre';

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
        <label htmlFor="text-input-label" data-testid="text-input-label">
          Inclui o texto:
          <br />
          <input
            type="text"
            id="text-input-label"
            data-testid="text-input"
            name="searchText"
            value={ searchText }
            onChange={ onSearchTextChange }
          />
        </label>
        <br />
        <label
          htmlFor="checkbox-input-label"
          data-testid="checkbox-input-label"
        >
          <input
            type="checkbox"
            id="checkbox-input-label"
            data-testid="checkbox-input"
            name="bookmarkedOnly"
            checked={ bookmarkedOnly }
            onChange={ onBookmarkedChange }
          />
          Mostrar somente favoritos
        </label>
        <br />
        <SelectedGenre
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ onSelectedGenreChange }
        />
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
