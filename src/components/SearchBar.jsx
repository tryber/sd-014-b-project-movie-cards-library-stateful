// implement SearchBar component here
import React from 'react';
import PropTypes from 'prop-types';

class SearchBar extends React.Component {
  render() {
    
  }
}

SearchBar.propTypes = {
  searchText: propTypes.string.isRequired,
  onSearchTextChange: proptypes.function.isRequired,
  bookmarkedOnly: propTypes.boolean.isRequired,
  onBookmarkedChange: propTypes.function.is,
  selectedGenre: propTypes.string.isRequired,
  onSelectedGenreChange: propTypes.function.isRequired
};

export default SearchBar;
