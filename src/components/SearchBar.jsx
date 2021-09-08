// 1) Criando o SearchBar
import React from 'react';

// 1 - Crie um componente chamado <SearchBar />

export default class SearchBar extends React.Component {
  render() {
    const { searchText, onSearchTextChange, bookmarkedOnly } = this.props;
    return (
    // 2 - Renderize um formulário dentro de <SearchBar />
      <form data-testid="search-bar-form">
        {/* 3 - Renderize um input do tipo texto dentro do form */}
        <label htmlFor="text-input" data-testid="text-input-label">
          Inclui o texto
          <input
            data-testid="text-input"
            type="text"
            onChange={ onSearchTextChange }
            value={ searchText }
          />
        </label>
        {/* 4 - Renderize um input do tipo checkbox */}
        <label htmlFor="checkbox-input" data-testid="checkbox-input-label">
          Mostrar somente favoritos
          <input
            type="checkbox"
            checked={ bookmarkedOnly }
            onChange={ onBookmarkedChange }
            data-testid="checkbox-input"
            name="bookmarkedOnly"
          />
        </label>
      </form>
    );
  }
}
