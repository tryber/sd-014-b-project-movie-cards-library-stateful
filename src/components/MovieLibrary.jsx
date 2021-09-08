import React from 'react';
import SearchBar from './SearchBar';
import MovieList from './MovieList';
import movies from '../data';

export default class MovieLibrary extends React.Component {
  render() {
    return (
      <>
        <SearchBar
          movies={ movies }
          searchText=""
          onSearchTextChange={ () => {} }
          bookmarkedOnly=""
          selectedGenre=""
          onSelectedGenreChange={ () => {} }
        />
        <MovieList movies={ movies } />
      </>
    );
  }
}
