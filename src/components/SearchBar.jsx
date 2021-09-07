import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class SearchBar extends Component {
  render() {
    const {
      searchText,
      onSearchTextChange,
      bookMarkedOnly,
      selectedGenre,
      onSelectedGenreChange,
    } = this.props;
    return (
      <div>
        {searchText}
        {onSearchTextChange}
        {bookMarkedOnly}
        {selectedGenre}
        {onSelectedGenreChange}
      </div>
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
