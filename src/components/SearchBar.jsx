import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TextInput from './TextInput';

export default class SearchBar extends Component {
  render() {
    const { searchText,
      onSearchTextChange,
    } = this.props;
    /*
    const { searchText,
      onSearchTextChange,
      bookmarkedOnly,
      onBookmarkedChange,
      selectedGenre,
      onSelectedGenreChange
    } = this.props;
    */
    return (
      <div>
        <form data-testid="search-bar-form">
          <TextInput value={ searchText } onChange={ onSearchTextChange } />
        </form>
      </div>
    );
  }
}

SearchBar.propTypes = {
  searchText: PropTypes.string.isRequired,
  onSearchTextChange: PropTypes.func.isRequired,
};
/*
SearchBar.propTypes = {
  bookmarkedOnly: PropTypes.bool.isRequired,
  onBookmarkedChange: PropTypes.func.isRequired,
  selectedGenre: PropTypes.string.isRequired,
  onSelectedGenreChange: PropTypes.func.isRequired,
};
*/
