import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TextInput from './TextInput';
import GenreFilter from './GenreFilter';
import Bookmarked from './Bookmarked';

class SearchBar extends Component {
  render() {
    const {
      searchText,
      onSearchTextChange,
      bookmarkedOnly,
      onBookmarkedChange,
      selectedGenre,
      onSelectedGenreChange,
    } = this.props;

    return (
      <form className="search-bar-form" data-testid="search-bar-form">
        <TextInput
          label="Inclui o texto:"
          type="text"
          name="searchText"
          value={ searchText }
          onChange={ onSearchTextChange }
          dataTestid="text-input"
        />
        <Bookmarked
          checked={ bookmarkedOnly }
          onChange={ onBookmarkedChange }
        />
        <GenreFilter
          selectedGenre={ selectedGenre }
          onChange={ onSelectedGenreChange }
        />
      </form>
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
