import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import MovieList from './MovieList';

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

    this.handleChange = this.handleChange.bind(this);
    this.handleFilters = this.handleFilters.bind(this);
    this.filterByTextInput = this.filterByTextInput.bind(this);
  }

  handleChange({ target }) {
    const { name } = target;
    const value = (target.type === 'checkbox') ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  }

  handleFilters(movies) {
    const { bookmarkedOnly, selectedGenre } = this.state;

    if (bookmarkedOnly && selectedGenre) {
      const moviesFiltered = movies
        .filter((movie) => movie.bookmarked)
        .filter((movie) => movie.genre === selectedGenre);
      return this.filterByTextInput(moviesFiltered);
    }

    if (bookmarkedOnly) {
      const moviesFiltered = movies
        .filter((movie) => movie.bookmarked);
      return this.filterByTextInput(moviesFiltered);
    }

    if (selectedGenre) {
      const moviesFiltered = movies
        .filter((movie) => movie.genre === selectedGenre);
      return this.filterByTextInput(moviesFiltered);
    }

    return this.filterByTextInput(movies);
  }

  filterByTextInput(movies) {
    const { searchText } = this.state;

    return movies.filter((movie) => (
      movie.title.includes(searchText)
      || movie.subtitle.includes(searchText)
      || movie.storyline.includes(searchText)
    ));
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
    return (
      <div>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.handleChange }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.handleChange }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.handleChange }
        />
        <MovieList movies={ this.handleFilters(movies) } />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MovieLibrary;
