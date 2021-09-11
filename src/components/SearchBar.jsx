import React from 'react';
import PropTypes from 'prop-types';

class SearchBar extends React.Component {
  // constructor() {
  //   super();
  // }
  render() {
    const { searchText, onSearchTextChange, bookmarkedOnly,
      onBookmarkedChange, selectedGenre, onSelectedGenreChange } = this.props;
    return (
      <section>
        <form data-testid="search-bar-form">
          <label
            htmlFor="searchBar"
            data-testid="text-input-label"
          >
            Inclui o texto:
            <input
              data-testid="text-input"
              type="text"
              value={ searchText }
              onChange={ onSearchTextChange }
            />
          </label>
        </form>
        <div>
          { bookmarkedOnly }
          { onBookmarkedChange }
          { selectedGenre }
          { onSelectedGenreChange }
        </div>
      </section>
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
