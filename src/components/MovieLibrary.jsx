import React from 'react';
import SearchBar from './SearchBar';
import MovieList from './MovieList';
import moviesData from '../data';

export default class MovieLibrary extends React.Component {
  render() {
    const testeFunction = console.log('Teste');
    return (
      <>
        <SearchBar
          searchText=""
          onSearchTextChange={ testeFunction }
          bookmarkedOnly={ false }
          onBookmarkedChange={ testeFunction }
          selectedGenre=""
          onSelectedGenreChange={ testeFunction }
        />
        <MovieList movies={ moviesData } />
      </>
    );
  }
}
