import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);
    const { movies } = props;
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies,
      moviesBackup: movies,
    };

    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    this.onBookmarkedChange = this.onBookmarkedChange.bind(this);
    this.onSelectedGenreChange = this.onSelectedGenreChange.bind(this);
    this.onClick = this.onClick.bind(this);
    this.filterFavorited = this.filterFavorited.bind(this);
    this.filterGenders = this.filterGenders.bind(this);
    this.filterSearch = this.filterSearch.bind(this);
  }

  onSearchTextChange({ target }) {
    this.setState({
      searchText: target.value,
    });
    this.filterSearch(target.value);
  }

  onBookmarkedChange() {
    const { bookmarkedOnly } = this.state;
    if (bookmarkedOnly === false) {
      this.setState({
        bookmarkedOnly: true,
      });
      this.filterFavorited();
    } else {
      this.setState({
        bookmarkedOnly: false,
      });
      this.filterFavorited();
    }
  }

  onSelectedGenreChange({ target: { value } }) {
    this.setState({
      selectedGenre: value,
    });
    this.filterGenders(value);
  }

  onClick(state) {
    const { movies } = this.props;
    console.log(state);
    const arrayMovies = [...movies, state];
    console.log(arrayMovies);

    this.setState({
      movies: arrayMovies,
      moviesBackup: arrayMovies,
    });
    console.log(this.state.movies);
  }

  filterFavorited() {
    const { bookmarkedOnly, moviesBackup } = this.state;
    const favoritedMoviesTrue = moviesBackup.filter((movie) => movie.bookmarked === true);
    if (!bookmarkedOnly) {
      this.setState({
        movies: favoritedMoviesTrue,
      });
    } else {
      this.setState({
        movies: moviesBackup,
      });
    }
  }

  filterGenders(gender) {
    const { moviesBackup } = this.state;
    const favoritedGender = moviesBackup.filter((movie) => gender === movie.genre);
    if (gender === '') {
      this.setState({
        movies: moviesBackup,
      });
    } else {
      this.setState({
        movies: favoritedGender,
      });
    }
  }

  filterSearch(search) {
    const { moviesBackup } = this.state;
    const searchResult = moviesBackup.filter((movie) => movie.title.includes(search)
    || movie.subtitle.includes(search) || movie.storyline.includes(search));

    this.setState({
      movies: searchResult,
    });
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar
          searchText={ searchText }
          bookmarkedOnly={ bookmarkedOnly }
          selectedGenre={ selectedGenre }
          onSearchTextChange={ this.onSearchTextChange }
          onBookmarkedChange={ this.onBookmarkedChange }
          onSelectedGenreChange={ this.onSelectedGenreChange }
        />
        <MovieList movies={ movies } />
        <AddMovie onClick={ this.onClick } />
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
