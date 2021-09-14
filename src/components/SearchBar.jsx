import React from 'react';
import PropTypes from 'prop-types';

class SearchBar extends React.Component {

  render() {
    const {
      searchText,
      onSearchTextChange,
      bookmarkedOnly,
      onBookmarkedChange,
      selectedGenre,
      onSelectedGenreChange} = this.props;
    return (
      <form data-testid="search-bar-form">
        <label data-testid="text-input-label" for="name">Inclui o texto:</label>
        <input type="text" value={ searchText } onChange={ onSearchTextChange }
        name="name" data-testid="text-input" ></input>

        <label data-testid="checkbox-input-label" for="fav">Mostrar somente favoritos</label>
        <input type="checkbox" checked={ bookmarkedOnly } onChange={ onBookmarkedChange }
        name="fav" data-testid="checkbox-input" ></input>
        
        <label data-testid="select-input-label" for="genre">Filtrar por gênero</label>
        <select value={ selectedGenre } onChange={ onSelectedGenreChange }
        name="genre" data-testid="select-input">
          <option value="" data-testid="select-option">Todos</option>
          <option value="action" data-testid="select-option">Ação</option>
          <option value="comedy" data-testid="select-option">Comédia</option>
          <option value="thriller" data-testid="select-option">Suspense</option>
        </select>
      </form>
    );
  }
}

SearchBar.PropTypes = {
  searchText: PropTypes.string,
  onSearchTextChange: PropTypes.func,
  bookmarkedOnly: PropTypes.bool,
  onBookmarkedChange: PropTypes.func,
  selectedGenre: PropTypes.string,
  onSelectedGenreChange: PropTypes.func,
};
export default SearchBar;
