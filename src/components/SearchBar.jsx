import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SearchForms from './searchFormsComponents/SearchForms';

class SearchBar extends Component {
  render() {
    const { searchText,
      onSearchTextChange,
      bookmarkedOnly,
      onBookmarkedChange,
      selectedGenre,
      onSelectedGenreChange } = this.props;
    return (
      <div>
        <SearchForms
          searchText={ searchText }
          onTextChange={ onSearchTextChange }
          checked={ bookmarkedOnly }
          onChecked={ onBookmarkedChange }
          selectedGenre={ selectedGenre }
          onSelectGenre={ onSelectedGenreChange }
        />
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
  onSelectedGenreChange: PropTypes.func,
}).isRequired;

export default SearchBar;
