import React from 'react';
import { string, func, bool } from 'prop-types';

class SearchBar extends React.Component {
  addFilterByGenre = () => {
    const {
      selectedGenre,
      onSelectedGenreChange,
    } = this.props;
    return (
      <label
        htmlFor="genreFilter"
        data-testid="select-input-label"
      >
        Filtrar por gênero
        <select
          id="genreFilter"
          value={ selectedGenre }
          onChange={ onSelectedGenreChange }
          data-testid="select-input"
        >
          <option value="" data-testid="select-option">Todos</option>
          <option value="action" data-testid="select-option">Ação</option>
          <option value="comedy" data-testid="select-option">Comédia</option>
          <option value="thriller" data-testid="select-option">Suspense</option>
        </select>
      </label>
    );
  };

  render() {
    const {
      searchText,
      onSearchTextChange,
      bookmarkedOnly,
      onBookmarkedChange,
    } = this.props;

    return (
      <div>
        <form data-testid="search-bar-form">
          <label
            htmlFor="searchBox"
            data-testid="text-input-label"
          >
            Inclui o texto:
            <input
              id="searchBox"
              type="text"
              value={ searchText }
              onChange={ onSearchTextChange }
              data-testid="text-input"
            />
          </label>

          <label
            htmlFor="checkBox"
            data-testid="checkbox-input-label"
          >
            Mostrar somente favoritos
            <input
              id="checkBox"
              type="checkbox"
              checked={ bookmarkedOnly }
              onChange={ onBookmarkedChange }
              data-testid="checkbox-input"
            />
          </label>
          { this.addFilterByGenre() }
        </form>
      </div>
    );
  }
}

SearchBar.propTypes = {
  selectedGenre: string.isRequired,
  onSelectedGenreChange: func.isRequired,
  searchText: string.isRequired,
  onSearchTextChange: func.isRequired,
  bookmarkedOnly: bool.isRequired,
  onBookmarkedChange: func.isRequired,
};

export default SearchBar;
