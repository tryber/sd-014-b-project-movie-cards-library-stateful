import React, { Component } from "react";

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
      <div className="search-bar">
        <form data-testid="search-bar-form">
          <label data-testid="text-input-label" htmlFor="searchText">
            Inclui o texto:
            <input
              type="text"
              value={ searchText }
              id="searchText"
              onChange={ onSearchTextChange }
              data-testid="text-input"
            />
          </label>
        </form>
      </div>
    );
  }
}

export default SearchBar;
