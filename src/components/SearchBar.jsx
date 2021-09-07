import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SearchBar extends Component {
  render() {
    const { searchText,
      onSearchTextChange,
      bookmarkedOnly,
      onBookmarkedChange,
      selectedGenre,
      onSelectedGenre } = this.props;
    return (
      <p>
        Um elemento!
        { searchText }
        { onSearchTextChange }
        { bookmarkedOnly }
        { onBookmarkedChange }
        { selectedGenre }
        { onSelectedGenre }
      </p>
    );
  }
}

SearchBar.propTypes = PropTypes.shape({
  searchText: PropTypes.string,
  onSearchTextChange: PropTypes.func,
  bookmarkedOnly: PropTypes.bool,
  onBookmarkedOnly: PropTypes.func,
  selectedGenre: PropTypes.string,
  onSelectedGenre: PropTypes.func,
}).isRequired;

export default SearchBar;
