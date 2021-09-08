import React from 'react';
import PropTypes from 'prop-types';

class SearchBar extends React.Component {
  render() {
    const { searchText,
      onSearchTextChange,
      bookmarkedOnly,
      onBookmarkedChange,
      selectedGenre,
      onSelectedGenreChange } = this.props;
    return (
      <form data-testid="search-bar-form">
        <label data-testid="text-input-label" htmlFor="texto">
          Inclui o texto
          <input
            data-testid="text-input"
            id="texto"
            type="text"
            value={ searchText }
            onChange={ onSearchTextChange }
          />
        </label>
        <input
          type="checkbox"
        />
      </form>
    );
  }
}
SearchBar.protoTypes = {
  searchText : PropTypes.string,
  onSearchTextChange : PropTypes.string,
  bookmarkedOnly : PropTypes.string,
  onBookmarkedChange : PropTypes.string,
  selectedGenre : PropTypes.string,
  onSelectedGenreChange : PropTypes.string,
};

export default SearchBar;
