// implement SearchBar component here
import React, { Component } from 'react';
import AddInput from './AddInput';
import AddCheckBox from './AddCheckBox';
import AddSelect from './AddSelect';

export default class SearchBar extends Component {
  render() {
    const {
      searchText,
      onSearchTextChange,
      bookmarkedOnly,
      onBookmarkedChange,
      selectedGenre,
      onSelectedGenreChange
    } = this.props;

    return (
      <form action="" data-testid="search-bar-form">
        <AddInput dfValue={ searchText } onChange={ onSearchTextChange } />
        <AddCheckBox dfValue={ bookmarkedOnly } onChange={ onBookmarkedChange } />
        <AddSelect dfValue={ selectedGenre } onChange={ onSelectedGenreChange } />
      </form>
    );
  }
}
