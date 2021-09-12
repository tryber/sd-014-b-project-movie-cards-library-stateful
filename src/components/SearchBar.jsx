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
        <form data-testid="search-bar-form">
          <label data-testid="text-input-label" >Inclui o texto:<input type="text" /></label>
        </form>
      </div>
    );
  }
}
