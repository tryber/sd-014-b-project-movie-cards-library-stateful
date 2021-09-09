// implement SearchBar component here
import React, { Component } from 'react';

class SearchBar extends Component { // req1. passar as propriedades para o componente
  render() {
    const {
      searchText,
      onSearchTextChange, // essa propriedade é respósavel pela mudança de estado pós busca
      bookmarkedOnly, // filmes favoristos
      onBookmarkedChange,
      selectedGenre,
      onSelectedGenreChange,
    } = this.props;

    return (
      <form data-testid="search-bar-form">
        <label htmlFor="temp-id" data-testid="text-input-label">
          Inclui o texto:
          <input
            name="search-text"
            data-testid="text-input"
            type="text"
            value={ searchText } // A propriedade value do input deve receber o valor da prop searchText
            onChange={ onSearchTextChange } // A propriedade onChange do input deve receber o valor da prop onSearchTextChange
          />
        </label>
        <label htmlFor="only-favorites" data-testid="checkbox-input-label">
          Mostrar somente favoritos
          <input
            name="only-favorites"
            data-testid="checkbox-input"
            type="checkbox"
            checked={ bookmarkedOnly } // A propriedade checked do input deve receber o valor da prop bookmarkedOnly
            onChange={ onBookmarkedChange } // A propriedade onChange do input deve receber o valor da prop onBookmarkedChange
          />
        </label>
        <label htmlFor="genre-select" data-testid="select-input-label">
          Filtrar por gênero
          <select
            name="genre-select"
            data-testid="select-input"
            value={ selectedGenre } // A propriedade value do select deve receber o valor da prop selectedGenre;
            onChange={ onSelectedGenreChange } // A propriedade onChange do select deve receber o valor da prop onSelectedGenreChange
          >
            <option data-testid="select-option" value="">Todos</option>
            <option data-testid="select-option" value="action">Ação</option>
            <option data-testid="select-option" value="comedy">Comédia</option>
            <option data-testid="select-option" value="thriller">Suspense</option>
          </select>
        </label>

      </form>
    );
  }
}

export default SearchBar;
