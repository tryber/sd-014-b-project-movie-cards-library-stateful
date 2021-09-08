import React from 'react';
import PropTypes from 'prop-types';
import SearchText from './searchText';
import MarkedChange from './onBookmarkedChange';
import SelectedGenreBar from './selectedGenre';

class SearchBar extends React.Component {
  render() {
    const { searchText,
      onSearchTextChange,
      bookmarkedOnly,
      onBookmarkedChange,
      selectedGenre,
      onSelectedGenreChange } = this.props;

    return (
      <div>
        <form data-testid="search-bar-form">
          <SearchText
            searchText={ searchText }
            onSearchTextChange={ onSearchTextChange }
          />
          <MarkedChange
            onBookmarkedChange={ onBookmarkedChange }
            bookmarkedOnly={ bookmarkedOnly }
          />
          <SelectedGenreBar
            selectedGenre={ selectedGenre }
            onSelectedGenreChange={ onSelectedGenreChange }
          />
        </form>
      </div>
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
