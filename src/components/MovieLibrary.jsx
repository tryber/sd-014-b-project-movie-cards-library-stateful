import React from 'react';
import SearchBar from './SearchBar';
import MovieList from './MovieList';
import movies from '../data';

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
      <>
        <SearchBar movies={ this.movies }/>
        <MovieList movies={ movies }/>
      </>
    )
  }
}