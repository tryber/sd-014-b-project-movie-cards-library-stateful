import React, { Component } from 'react';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';
import movies from '../data';
import MovieList from './MovieList';

class MovieLibrary extends Component {
  constructor() {
    super();

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies,
    };
  }

  onSearchTextChange = ({ target }) => {
    const listMov = movies;
    if (target.name === 'searchText') {
      this.filterByText(target.value.toLowerCase());
    } else {
      this.setState({
        movies: listMov,
      });
    }
  }

  filterByText= (text) => {
    const listMovies = movies;
    const filter = listMovies.filter((element) => element.title
      .toLowerCase().includes(text)
    || element.subtitle.toLowerCase().includes(text)
    || element.storyline.toLowerCase().includes(text));
    this.setState({
      movies: filter,
    });
  }

  filterByGenre = (select) => {
    const listMovies = movies;
    const filterGenre = listMovies.filter((element) => element.genre === select);
    this.setState({
      movies: filterGenre,
    });
  }

  filterByFavorite = (check) => {
    const listMovies = movies;
    const filterCheck = listMovies.filter((element) => element.bookmarked === check);
    this.setState({
      movies: filterCheck,
    });
  };

  render() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
    return (
      <div>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.onSearchTextChange }
          bookmarkedOnly={ bookmarkedOnly }
          /* onBookmarkedChange={ this.onBookmarkedChange } */
          selectedGenre={ selectedGenre }
          /* onSelectedGenreChange={ this.onBookmarkedChange } */
        />
        <MovieList movies={ movies } />
        <AddMovie onClick={ this.handleClick } />
      </div>
    );
  }
}

export default MovieLibrary;
