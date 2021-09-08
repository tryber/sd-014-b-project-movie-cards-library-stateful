import React, { Component } from 'react';
import PropTypes from 'prop-types';
import InputText from './InputText';
import Checkbox from './Checkbox';
import Select from './Select';

class SearchBar extends Component {
  render() {
    const { searchText, onSearchTextChange, bookmarkedOnly,
      onBookmarkedChange, selectedGenre, onSelectedGenreChange } = this.props;
    return (
      <form className="search-forms" data-testid="search-bar-form">
        <InputText value={ searchText } onChange={ onSearchTextChange } />
        <div>
          <Checkbox checked={ bookmarkedOnly } onChange={ onBookmarkedChange } />
          <Select selected={ selectedGenre } onChange={ onSelectedGenreChange } />
        </div>
      </form>
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
