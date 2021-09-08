import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);
    const { movies } = this.props;
    this.onClick = this.onClick.bind(this);
    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    this.onBookmarkedChange = this.onBookmarkedChange.bind(this);
    this.onSelectedGenreChange = this.onSelectedGenreChange.bind(this);
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies,
    };
  }

  onClick(movie) {
    const { movies } = this.props;
    const newMovies = [...movies, movie];
    this.setState({
      movies: newMovies,
    });
  }

  onSearchTextChange({ target }) {
    const { movies } = this.props;
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
    const filteredMovies = movies.filter(
      (movie) => (movie.title.toLowerCase().includes(value)
    || movie.subtitle.toLowerCase().includes(value)
    || movie.storyline.toLowerCase().includes(value)),
    );
    if (value !== '') {
      this.setState({
        movies: filteredMovies,
      });
    } else {
      this.setState({
        movies,
      });
    }
  }

  onBookmarkedChange({ target }) {
    const { movies } = this.props;
    const { name } = target;
    const value = target.checked;
    this.setState({
      [name]: value,
    });
    const filteredMovies = movies.filter((movie) => movie.bookmarked === true);
    if (value === true) {
      this.setState({
        movies: filteredMovies,
      });
    } else {
      this.setState({
        movies,
      });
    }
  }

  onSelectedGenreChange({ target }) {
    const { movies } = this.props;
    const { name } = target;
    const { value } = target;
    this.setState({
      [name]: value,
    });
    const filteredMovies = movies.filter((movie) => movie.genre === value);
    if (value !== '') {
      this.setState({
        movies: filteredMovies,
      });
    } else {
      this.setState({
        movies,
      });
    }
  }

  render() {
    const {
      searchText,
      bookmarkedOnly,
      selectedGenre,
      movies,
    } = this.state;
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
