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
      <form data-testid="search-bar-form">
        <label htmlFor="temp-id" data-testid="text-input-label">
          Inclui o texto:
          <input
            data-testid="text-input"
            type="text"
            value={ searchText } // A propriedade value do input deve receber o valor da prop searchText
            onChange={ onSearchTextChange } // A propriedade onChange do input deve receber o valor da prop onSearchTextChange
          />
        </label>

        <label htmlFor="checkbox" data-testid="checkbox-input-label">
          Mostrar somente favoritos
          <input
            data-testid="checkbox-input"
            type="checkbox"
            checked={ bookmarkedOnly } // A propriedade checked do input deve receber o valor da prop bookmarkedOnly
            onChange={ onBookmarkedChange } // A propriedade onChange do input deve receber o valor da prop onBookmarkedChange
          />
        </label>

      </form>
    );
  }
}

export default SearchBar;
