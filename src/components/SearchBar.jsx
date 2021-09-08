// implement SearchBar component here
import React, { Component } from 'react'

export class SearchBar extends Component {

  constructor() {
    super();

    this.onSearchTextChange = this.onSearchTextChange.bind(this); // Usa-se para uma callback;
    this.onBookmarkedChange = this.onBookmarkedChange.bind(this);
    this.onSelectedGenreChange = this.onSelectedGenreChange.bind(this);

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
    };
  }

  onSearchTextChange({ target }) {
    const { value } = target;
    this.setState({ searchText: value });
  }

  onBookmarkedChange({ target }) {
    const { checked } = target;
    this.setState({ bookmarkedOnly: checked });
  }

  onSelectedGenreChange({ target }) {
    const { value } = target;
    this.setState({ selectedGenre: value });
  }

  render() {
    return (
      <form>

      </form>
    );
  }
}

export default SearchBar;
