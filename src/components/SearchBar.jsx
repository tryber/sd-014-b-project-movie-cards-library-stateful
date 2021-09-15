import React from 'react';
import PropTypes from 'prop-types';

class SearchBar extends React.Component {
  render() {
    const { searchText, onSearchTextChange,
      onBookmarkedChange, bookmarkedOnly } = this.props;

    return (
      <form data-testid="search-bar-form">
        <label label data-testid="text-input-label" htmlFor="text">
          Inclui o texto:
          <input
            data-testid="text-input"
            type="text"
            id="text"
            value={ searchText }
            onChange={ onSearchTextChange }
          />
        </label>
        <label data-testid="checkbox-input-label" htmlFor="checkbox">
          Mostrar somente favoritos
          <input
            data-testid="checkbox-input"
            id="checkbox"
            type="checkbox"
            checked={ bookmarkedOnly }
            onChange={ onBookmarkedChange }
          />
        </label>
      </form>
    );
  }
}

SearchBar.protoTypes = {
  searchText: PropTypes.string,
  onSearchTextChange: PropTypes.func,
  bookmarkedOnly: PropTypes.bool,
  onBookmarkedChange: PropTypes.func,
  selectedGenre: PropTypes.string,
  onSelectedGenreChange: PropTypes.func,
};

export default SearchBar;
