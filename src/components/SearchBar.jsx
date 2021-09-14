import React from 'react';
import PropTypes from 'prop-types';

class SearchBar extends React.Component {

  render() {
    const {
      searchText,
      onSearchTextChange,
      bookmarkedOnly,
      onBookmarkedChange,
      selectedGenre,
      onSelectedGenreChange} = this.props;
    return (
      <form data-testid="search-bar-form">
        <label data-testid="text-input-label" for="name">Inclui o texto:</label>
        <input type="text" value={ searchText } onChange={ onSearchTextChange }
        name="name" data-testid="text-input" ></input>
      </form>
    );
  }
}

SearchBar.PropTypes = {
  searchText: PropTypes.string,
  onSearchTextChange: PropTypes.func,
  bookmarkedOnly: PropTypes.bool,
  onBookmarkedChange: PropTypes.func,
  selectedGenre: PropTypes.string,
  onSelectedGenreChange: PropTypes.func,
};
export default SearchBar;
