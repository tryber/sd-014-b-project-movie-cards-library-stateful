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
      <form data-testid="search-bar-form"> a </form> // req2. form com atributo data-testid="search-bar-form"
    );
  }
}

export default SearchBar;
