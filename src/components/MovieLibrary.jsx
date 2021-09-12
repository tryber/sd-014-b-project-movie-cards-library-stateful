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
    };
  }

  onClick = (movie) => {
    const { movies } = this.state;
    this.setState(
      { movies: [...movies, movie] },
    );
  }

  handleCheckbox = (name, checked) => {
    if (checked) {
      this.setState({ [name]: true });
    } else { this.setState({ [name]: false }); }
  }

  handleClick = (event) => {
    const { value, name, type, checked } = event.target;
    if (type === 'checkbox') {
      this.handleCheckbox(name, checked);
    } else { this.setState({ [name]: value }); }
  }

  selectedGenreChange = (films, selectedGenre) => {
    if (selectedGenre !== '') {
      return films.filter((movie) => movie.genre === selectedGenre);
    }
    return films;
  }

  bookmarkedChange = (films, bookmarkedOnly) => {
    if (bookmarkedOnly) {
      return films.filter((movie) => movie.bookmarked);
    }
    return films;
  }

  searchTextChange(movies, searchText) {
    return movies.filter(
      (movie) => movie.title.toUpperCase().includes(searchText.toUpperCase())
        || movie.subtitle.toUpperCase().includes(searchText.toUpperCase())
        || movie.storyline.toUpperCase().includes(searchText.toUpperCase()),
    );
  }

  filteredFilms() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
    let filterMovies = this.bookmarkedChange(movies, bookmarkedOnly);
    filterMovies = this.selectedGenreChange(filterMovies, selectedGenre);
    filterMovies = this.searchTextChange(filterMovies, searchText);
    return filterMovies;
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar
          searchText={ searchText }
          callBack={ this.handleClick }
          bookmarkedOnly={ bookmarkedOnly }
          selectedGenre={ selectedGenre }
          onSearchTextChange={ this.handleClick }
          onBookmarkedChange={ this.handleClick }
          onSelectedGenreChange={ this.handleClick }
        />
        <MovieList movies={ this.filteredFilms() } />
        <AddMovie onClick={ this.onClick } />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape(
      {
        title: PropTypes.string.isRequired,
        subtitle: PropTypes.string.isRequired,
        storyline: PropTypes.isRequired,
        rating: PropTypes.number.isRequired,
        imagePath: PropTypes.string.isRequired,
        bookmarked: PropTypes.bool.isRequired,
        genre: PropTypes.string.isRequired,

      },
    ),
  ).isRequired,
};

export default MovieLibrary;
