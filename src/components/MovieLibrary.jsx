import React from 'react';
import SearchBar from './SearchBar';

export default class MovieLibrary extends React.Component {
  render() {
    const { movies: {
      searchText,
      onSearchTextChange,
      bookmarkedOnly,
      selectedGenre,
      onSelectedGenreChange,
    }} = this.props;
    return (
      <SearchBar movies={ this.movies }/>
    )
  }
}