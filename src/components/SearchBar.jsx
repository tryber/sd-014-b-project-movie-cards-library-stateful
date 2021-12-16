import React from 'react';
import PropTypes from 'prop-types';

class SearchBar extends React.Component {
  searchTextInput = (value, onChange) => (
    <label
      data-testid="text-input-label"
      htmlFor="searchText"
      className="text-form"
    >
      Include the text
      <input
        type="text"
        name="searchText"
        data-testid="text-input"
        onChange={ onChange }
        value={ value }
        className="search-input"
      />
    </label>
  )

  checkBoxFavorites = (value, onChange) => (
    <label
      htmlFor="bookmarkedOnly"
      data-testid="checkbox-input-label"
      className="text-form"
    >
      <input
        name="bookmarkedOnly"
        type="checkbox"
        checked={ value }
        onChange={ onChange }
        data-testid="checkbox-input"
      />
      { ' Show only favorites' }
    </label>
  )

  filterByGenre = (value, onChange) => (
    <label
      htmlFor="selectedGenre"
      data-testid="select-input-label"
      className="text-form"
    >
      Filter by genre
      <select
        value={ value }
        name="selectedGenre"
        onChange={ onChange }
        data-testid="select-input"
        className="select-input"
      >
        <option value="" data-testid="select-option">All</option>
        <option value="action" data-testid="select-option">Action</option>
        <option value="comedy" data-testid="select-option">Comedy</option>
        <option value="thriller" data-testid="select-option">Suspense</option>
      </select>
    </label>
  )

  render() {
    const { searchText,
      onSearchTextChange,
      bookmarkedOnly,
      onBookmarkedChange,
      selectedGenre,
      onSelectedGenreChange } = this.props;
    return (
      <form data-testid="search-bar-form" className="search-bar-form">
        { this.searchTextInput(searchText, onSearchTextChange) }
        { this.checkBoxFavorites(onBookmarkedChange, bookmarkedOnly) }
        { this.filterByGenre(selectedGenre, onSelectedGenreChange) }
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
