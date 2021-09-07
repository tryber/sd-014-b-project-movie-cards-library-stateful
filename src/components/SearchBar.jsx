import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SearchForms from './SearchForms';

class SearchBar extends Component {
  render() {
    const { searchText,
      onSearchTextChange,
      bookmarkedOnly,
      onBookmarkedChange,
      selectedGenre,
      onSelectedGenre } = this.props;
    return (
      <div>
        <SearchForms searchText={ searchText } onTextChange={ onSearchTextChange } />
        { bookmarkedOnly }
        { onBookmarkedChange }
        { selectedGenre }
        { onSelectedGenre }
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

export default SearchBar;
