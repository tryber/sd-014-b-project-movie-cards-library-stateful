// implement SearchBar component here
import React, { Component } from "react";

export default class SearchBar extends Component {
  render() {
    const {
      searchText,
      onSearchTextChang,
      bookmarkedOnly,
      onBookmarkedChange,
      selectedGenre,
      onSelectedGenreChange,
    } = this.props;

    return (
      <div>
        <form data-testid="search-bar-form"></form>
      </div>
    );
  }
}
