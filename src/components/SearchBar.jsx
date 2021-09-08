// implement SearchBar component here
import React from 'react';
import PropTypes from 'prop-types';

class SearchBar extends React.Component {
  render() {
    const { searchText, onSearchTextChange, bookmarkedOnly } = this.props;
    const { onBookmarkedChange, selectedGenre, onSelectedGenreChange } = this.props;
    return (
      <div>
        <form data-testid="search-bar-form">
          <label data-testid="text-input-label" htmlFor="textInput">
            Inclui o texto:
            <input
              type="text"
              id="textInput"
              value={ searchText }
              onChange={ onSearchTextChange }
              data-testid="text-input"
            />
          </label>
        </form>
      </div>);
  }
}

SearchBar.propTypes = {
  searchText: PropTypes.string.isRequired,
	onSearchTextChange: PropTypes.func.isRequired,
};

export default SearchBar;
