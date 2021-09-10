import React, { Component } from 'react';
import PropTypes from 'prop-types';
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
      originalMovieList: props.movies,
    };
    this.addMovie = this.addMovie.bind(this);
    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    this.onBookmarkedChange = this.onBookmarkedChange.bind(this);
    this.onSelectedGenreChange = this.onSelectedGenreChange.bind(this);
  }

  onSearchTextChange({ target: { value } }) {
    const { originalMovieList } = this.state;
    this.setState({ searchText: value });
    const lowerCase = value.toLowerCase();
    const movieList = (value !== '')
      ? originalMovieList.filter(({ title }) => title.toLowerCase().includes(lowerCase))
      : originalMovieList;
    this.setState({ movies: movieList });
  }

  onBookmarkedChange() {
    const { originalMovieList, bookmarkedOnly } = this.state;
    const isSelected = !bookmarkedOnly;
    this.setState({ bookmarkedOnly: isSelected });
    const movieList = (isSelected)
      ? originalMovieList.filter(({ bookmarked }) => bookmarked)
      : originalMovieList;
    this.setState({ movies: movieList });
  }

  onSelectedGenreChange({ target: { value } }) {
    this.setState({ selectedGenre: value });
    const { originalMovieList } = this.state;
    const movieList = (value !== '')
      ? originalMovieList.filter(({ genre }) => genre === value)
      : originalMovieList;
    this.setState({ movies: movieList });
  }

  addMovie(movie) {
    const { movies } = this.state;
    const movieList = movies;
    movieList.push(movie);
    this.setState({ movies: movieList });
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.onSearchTextChange }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.onBookmarkedChange }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.onSelectedGenreChange }
        />
        <MovieList movies={ movies } />
        <AddMovie onClick={ this.addMovie } />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};
export default MovieLibrary;
