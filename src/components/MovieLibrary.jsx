import PropTypes from 'prop-types';
import React, { Component } from 'react';
import AddMovie from './AddMoviesComp/AddMovie';
import MovieList from './MovieList';
import SearchBar from './SearchBar';

class MovieLibrary extends Component {
  constructor() {
    super();
    const { movies } = this.props;
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies,
    };
  }

  changeState({ target }) {
    if (target.type === 'checkbox') {
      this.setState({
        [target.name]: target.checked,
      });
    }
    this.setState({
      [target.name]: target.value,
    });
  }

  filterMovies() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;

    movies.filter((movie) => (
      (bookmarkedOnly === false ? true : movie.bookmarked === true)
        && (movie.genre.includes(selectedGenre))
        && (
          (movie.title.includes(searchText))
          || (movie.subtitle.includes(searchText))
          || (movie.storyline.includes(searchText)))));

    movies.filter((movie) => {
      if()
    })
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
    return (
      <div>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.changeState }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.changeState }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.changeState }
        />
        <MovieList movies={ movies } />
        <AddMovie />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.object,
  ).isRequired,
};

export default MovieLibrary;
