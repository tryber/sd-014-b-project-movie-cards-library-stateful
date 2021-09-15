// implement MovieLibrary component here
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import MovieList from './MovieList';
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
    };

    this.handleChange = this.handleChange.bind(this);
    this.filterMovies = this.filterMovies.bind(this);
    this.addNewMovie = this.addNewMovie.bind(this);
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  }

  filterMovies() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;

    if (searchText !== '') {
      return movies.filter(({
        title,
        subtitle,
        storyline,
      }) => (
        title.toLowerCase().includes(searchText)
        || subtitle.toLowerCase().includes(searchText)
        || storyline.toLowerCase().includes(searchText)
      ));
    }

    if (bookmarkedOnly) {
      return movies.filter((movie) => movie.bookmarked === bookmarkedOnly);
    }

    if (selectedGenre !== '') {
      return movies.filter((movie) => movie.genre === selectedGenre);
    }
    return movies;
  }

  addNewMovie(newMovie) {
    const { movies } = this.state;
    this.setState({
      movies: [...movies, newMovie],
    });
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    return (
      <main>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.handleChange }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.handleChange }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.handleChange }
        />
        <MovieList movies={ this.filterMovies() } />
        <AddMovie onClick={ this.addNewMovie } />
      </main>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MovieLibrary;
