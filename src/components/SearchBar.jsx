import React from 'react';
import PropTypes from 'prop-types';

class SearchBar extends React.Component {
  render() {
    const { SearchText, onSearchTextChange, bookmarkedOnly,
      onBookmarkedChange, selectedGenre, onSelectedGenreChange } = this.props;
    return (
      <form data-testid="search-bar-form">
        <label htmlFor="text">
          Inclui o texto:
          <input
            data-testid="text-input"
            onChange={ onSearchTextChange }
            type="text"
            id="text"
            name="text"
            value={ SearchText }
          />
        </label>
      </form>
    );
  }
}

SearchBar.propTypes = {
  SearchText: PropTypes.string.isRequired,
  onSearchTextChange: PropTypes.func.isRequired,
  bookmarkedOnly: PropTypes.bool.isRequired,
  onBookmarkedChange: PropTypes.func.isRequired,
  selectedGenre: PropTypes.string.isRequired,
  onSelectedGenreChange: PropTypes.func.isRequired,
};

export default SearchBar;
