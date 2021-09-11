// implement MovieLibrary component here
import React from 'react';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';
import MovieList from './MovieList';
import listMovies from '../data';

class MovieLibrary extends React.Component {
  constructor() {
    super();

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: [],
    };
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
    return (
      <section>
        <SearchBar />
        <MovieList movies={ listMovies } />
        <AddMovie onClick={ () => {} } />
        <div>{ `${searchText} ${bookmarkedOnly} ${selectedGenre} ${movies}` }</div>
      </section>
    );
  }
}

export default MovieLibrary;
