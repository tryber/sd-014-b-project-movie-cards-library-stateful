import React, { Component } from 'react';
// import PropTypes from 'prop-types';

// import MovieList from './MovieList';

class SearchBar extends Component {
  constructor() {
    super();

    this.state = {
      searchText: '',
      bookmarkedOnly: '',
      selectedGenre: '',
    };
  }

  onSearchTextChange = (event) => {
    this.setState({
      searchText: event.target.value,
    });
  }

  onBookmarkedChange = (event) => {
    this.setState({
      bookmarkedOnly: event.target.value,
    });
  }

  onSelectedGenreChange = (event) => {
    this.setState({
      selectedGenre: event.target.value,
    });
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    return (
      <form className="formSearchBar" data-testid="search-bar-form">
        <label htmlFor="inputSearch" data-testid="text-input-label">
          Inclui o texto:
          <br />
          <input
            id="inputSearch"
            name="textSearch"
            type="text"
            value={ searchText }
            onChange={ this.onSearchTextChange }
          />
        </label>
        <br />
        <label htmlFor="inputCheck" data-testid="checkbox-input-label">
          Mostrar somente favoritos
          <input
            id="inputCheck"
            data-testid="checkbox-input"
            type="checkbox"
            checked={ bookmarkedOnly }
            onChange={ this.onBookmarkedChange }
          />
        </label>
        <br />
        <label htmlFor="inputSelect" data-testid="select-input-label">
          Filtrar por gênero
          <select
            id="inputSelect"
            data-testid="select-input"
            value={ selectedGenre }
            onChange={ this.onSelectedGenreChange }
          >
            <option value="">Todos</option>
            <option value="action">Ação</option>
            <option value="comedy">Comédia</option>
            <option value="thriller">Suspense</option>
          </select>
        </label>
      </form>
    );
  }
}

export default SearchBar;
