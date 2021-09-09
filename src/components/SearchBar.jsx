// implement SearchBar component here
import React, { Component } from "react";

class SearchBar extends Component {
  render() {
    const { searchText, onSearchTextChange, bookmarkedOnly,
      onBookmarkedOnlyChange, selectedGenre, onSelectedGenreChange } = this.props;
    return (
      <div></div>
    );
  }
}

export default SearchBar;
