// implement SearchBar component here
import React, { Component } from 'react'

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
      <form data-testid="search-bar-form">
        <label data-testid="text-input-label" htmlFor="" >
          Inclui o texto:
          <input
          name="searchText"
          value={ searchText }
          data-testid="text-input"
          onChange={ onSearchTextChange }
          type="text"
          />
        </label>
        <label data-testid="checkbox-input-label" htmlFor="">
          Mostrar somente favoritos
          <input
          name="bookmarkedOnly"
          type="checkbox"
          checked={ bookmarkedOnly }
          onChange= { onBookmarkedChange }
          data-testid="checkbox-input"
          />
        </label>
      </form>
    )
  }
}
