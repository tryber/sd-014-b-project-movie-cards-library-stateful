import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);
    const { movies } = this.props;
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies,
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

  onSelectedGenreChange({ target }) {
    this.setState({
      selectedGenre: target.value,
    });
    this.filterGenders(target.value);
  }

  onClick(state) {
    console.log(state);
  }

  filterFavorited() {
    const { movies } = this.props;
    const { bookmarkedOnly } = this.state;
    const favoritedMoviesTrue = movies.filter((movie) => movie.bookmarked === true);
    if (!bookmarkedOnly) {
      this.setState({
        movies: favoritedMoviesTrue,
      });
    } else {
      this.setState({
        movies,
      });
    }
  }

  filterGenders(gender) {
    const { movies } = this.props;
    const favoritedGender = movies.filter((movie) => gender === movie.genre);
    if (gender === '') {
      this.setState({
        movies,
      });
    } else {
      this.setState({
        movies: favoritedGender,
      });
    }
  }

  filterSearch(search) {
    const { movies } = this.props;
    const searchResult = movies.filter((movie) => movie.title.includes(search)
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
