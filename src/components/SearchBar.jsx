// implement SearchBar component here
import React from 'react';
import PropTypes from 'prop-types';

class SearchBar extends React.Component {
  render() {
    // const {
    //   filte: {
    //     searchText,
    //     onSearchTextChange,
    //     bookmarkedOnly,
    //     onBookmarkedChange,
    //     selectedGenre,
    //     onSelectedGenreChange,
    //   },
    // } = this.props;

    return (
      <form data-testid="search-bar-form">
        <input id="search" />
      </form>
    );
  }
}

SearchBar.propTypes = {
  filte: PropTypes.shape({
    searchText: PropTypes.string,
    onSearchTextChange: PropTypes.func,
    bookmarkedOnly: PropTypes.bool,
    onBookmarkedChange: PropTypes.func,
    selectedGenre: PropTypes.string,
    onSelectedGenreChange: PropTypes.func,
  }).isRequired,
};

export default SearchBar;
