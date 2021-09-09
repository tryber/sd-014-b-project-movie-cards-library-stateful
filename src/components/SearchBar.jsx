import React, { Component } from 'react';
// import MovieList from './MovieList';

class SearchBar extends Component {
  constructor() {
    super();
    this.state = {
      searchText: '',
      // bookmarkedOnly = false,
      // selectedGenre = '',
      // onSelectedGenreChange(),
    };
    this.onSearchTextChange = this.onSearchTextChange.bind(this);
  }

  onSearchTextChange(event) {
    console.log(this);
    this.setState({ searchText: event.target.value });
  }
  // onBookmarkedChange(),

  render() {
    const { searchText } = this.state;
    return (
      <form data-testid="search-bar-form">
        <label htmlFor="searchText" data-testid="text-input-label">
          Inclui o texto:
          <input
            value={ searchText }
            onChange={ this.onSearchTextChange }
            type="text"
            name="searchText"
            id="searchText"
            data-testid="text-input"
          />
        </label>
      </form>
    );
  }
}

export default SearchBar;
