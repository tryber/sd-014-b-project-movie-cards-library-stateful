// implement SearchBar component here
import React, { Component } from "react";

class SearchBar extends Component {
  render() {
    const { searchText, onSearchTextChange, bookmarkedOnly,
      onBookmarkedOnlyChange, selectedGenre, onSelectedGenreChange } = this.props;
    return (
      <form action="" data-testid="search-bar-form"></form>
    );
  }
}

export default SearchBar;
