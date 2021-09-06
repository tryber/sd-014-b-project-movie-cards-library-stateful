/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

class SearchBar extends React.Component {
  render() {
    return (
      <div>
        <form data-testid="search-bar-form">

          <label data-testid="text-input-label">
            Inclui o texto:
            <input
              type="text" value={this.props.searchText}
              onChange={this.onSearchTextChange}
              data-testid="text-input"
            />
          </label>

          <label data-testid="checkbox-input-label">
            Mostrar somente favoritos
            <input
              type="checkbox"
              checked={this.props.bookmarkedOnly}
              onChange={this.onBookmarkedChange}
              data-testid="checkbox-input"
            />
          </label>

          <label data-testid="select-input-label">
            Filtrar por gênero
            <select
              value={this.props.selectedGenre}
              onChange={this.onSelectedGenreChange}
              data-testid="select input"
            >
              <option value="" data-testid="select-option">Todos</option>
              <option value="action" data-testid="select-option">Ação</option>
              <option value="comedy" data-testid="select-option">Comédia</option>
              <option value="thriller" data-testid="select-option">Suspense</option>
            </select>
          </label>

        </form>
      </div>
    );
  }
}

export default SearchBar;
