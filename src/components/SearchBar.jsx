import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SearchBar extends Component {
  // constructor() {
  //   super();

  //   // this.state = {
  //   //   searchText: '',
  //   //   bookmarkedOnly: false,
  //   //   selectedGenre: '',
  //   // };
  // }

  render() {
    const { searchText, onSearchTextChange, bookmarkedOnly,
      onBookmarkedChange, onSelectedGenreChange, selectedGenre } = this.props;
    return (
      <section className="form-body">
        <form action="" data-testid="search-bar-form">
          <label data-testid="text-input-label" htmlFor="searchText">
            Inclui o texto:
            <input
              value={ searchText }
              onChange={ onSearchTextChange }
              type="text"
              name="searchText"
              data-testid="text-input"
            />
          </label>
          <label data-testid="checkbox-input-label" htmlFor="bookmarkedOnly">
            <input
              checked={ bookmarkedOnly }
              onChange={ onBookmarkedChange }
              type="checkbox"
              name="bookmarkedOnly"
              data-testid="checkbox-input"
            />
            Mostrar somente favoritos
          </label>
          <label data-testid="select-input-label" htmlFor="selectGenre">
            Filtrar por gênero
            <select
              value={ selectedGenre }
              onChange={ onSelectedGenreChange }
              name="selectedGenre"
              data-testid="select-input"
            >
              <option value="" data-testid="select-option">Todos</option>
              <option value="action" data-testid="select-option">Ação</option>
              <option value="comedy" data-testid="select-option">Comédia</option>
              <option value="thriller" data-testid="select-option">Suspense</option>
            </select>
          </label>
        </form>
      </section>
    );
  }
}

SearchBar.propTypes = {
  searchText: PropTypes.string.isRequired,
  onSearchTextChange: PropTypes.func.isRequired,
  bookmarkedOnly: PropTypes.bool.isRequired,
  onBookmarkedChange: PropTypes.func.isRequired,
  selectedGenre: PropTypes.string.isRequired,
  onSelectedGenreChange: PropTypes.func.isRequired,
};

export default SearchBar;
