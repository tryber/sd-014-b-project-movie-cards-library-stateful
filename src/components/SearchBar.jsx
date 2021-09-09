// implement SearchBar component here
import React, { Component } from "react";

class SearchBar extends Component {
  render() {
    const { searchText, onSearchTextChange, bookmarkedOnly,
      onBookmarkedOnlyChange, selectedGenre, onSelectedGenreChange } = this.props;
    return (
      <form action="" data-testid="search-bar-form">
        <label htmlFor="text-input" data-testid="text-input-label">
          Inclui o texto:
          <input
            type="text"
            value={ searchText }
            onChange={ onSearchTextChange }
            data-testid="text-input"
            name="text-input"
            id="text-input"
          />
        </label>
      </form>
    );
  }
}

export default SearchBar;
