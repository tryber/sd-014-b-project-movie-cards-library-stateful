// implement SearchBar component here
import React, { Component } from 'react';

class SearchBar extends Component { // req1. passar as propriedades para o componente
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
      <p>Search Bar</p>
    );
  }
}

export default SearchBar;
