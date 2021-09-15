// implement SearchBar component here
/*
1 - Crie um componente chamado <SearchBar />
2 - Renderize um formulário dentro de <SearchBar />
3 - Renderize um input do tipo texto dentro do formulário em <SearchBar />
4 - Renderize um input do tipo checkbox dentro do formulário em <SearchBar />
5 - Renderize um select dentro do formulário em <SearchBar />
*/
import React from 'react';

class SearchBar extends React.Component {
  render() {
    const { searchText, onSearchTextChange, bookmarkedOnly, onBookmarkedChange, selectedGenre, onSelectedGenreChange } = this.props;
    return (
      <form data-testid="search-bar-form">
        <label htmlFor="text-input" data-testid="text-input-label">
          Inclui o texto:
          <input type="text" onChange={ onSearchTextChange } data-testid="text-input" value={ searchText } id="text-input" />
        </label>
      </form>
    );
  }
}

export default SearchBar;
