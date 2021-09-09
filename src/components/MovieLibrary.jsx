import React, { Component } from 'react';

import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: props.movies,
    };
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ ({ target }) => {
            this.setState({ searchText: target.value });
          } }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ ({ target }) => {
            this.setState({ bookmarkedOnly: target.value });
          } }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ ({ target }) => {
            this.setState({ selectedGenre: target.value });
          } }
        />
        <MovieList movies={ movies } />
        <AddMovie />
      </div>
    );
  }
}

export default MovieLibrary;
