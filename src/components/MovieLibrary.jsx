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
      moviesSt: movies,
    };

    this.handleSearchTextChange = this.handleSearchTextChange.bind(this);
    this.handleBookmarkedChange = this.handleBookmarkedChange.bind(this);
    this.handleSelectedGenreChange = this.handleSelectedGenreChange.bind(this);
    this.handleAddMovie = this.handleAddMovie.bind(this);
  }

  handleSearchTextChange(event) {
    const { value } = event.target;
    const { moviesSt } = this.state;
    const filteredMovieList = moviesSt.filter((movie) => movie.title.includes(value)
        || movie.subtitle.includes(value)
        || movie.storyline.includes(value));
    this.setState({
      searchText: value,
      moviesSt: filteredMovieList,
    });
  }

  handleBookmarkedChange(event) {
    const { checked } = event.target;
    const { movies } = this.props;
    const { moviesSt } = this.state;
    const filteredMovieList = moviesSt.filter((movie) => movie.bookmarked === checked);
    if (checked === true) {
      this.setState({
        bookmarkedOnly: checked,
        moviesSt: filteredMovieList,
      });
    } if (checked === false) {
      this.setState({
        bookmarkedOnly: checked,
        moviesSt: movies,
      });
    }
  }

  handleSelectedGenreChange(event) {
    const { value } = event.target;
    const { moviesSt } = this.state;
    const filteredMovieList = moviesSt.filter((movie) => movie.genre.includes(value));
    this.setState({
      selectedGenre: value,
      moviesSt: filteredMovieList,
    });
  }

  handleAddMovie(event, state) {
    const { moviesSt } = this.state;
    const auxiliar = moviesSt;
    event.preventDefault();
    auxiliar.push(state);
    this.setState({
      moviesSt: auxiliar,
    });
  }

  render() {
    const {
      searchText,
      bookmarkedOnly,
      selectedGenre,
      moviesSt,
    } = this.state;
    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.handleSearchTextChange }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.handleBookmarkedChange }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.handleSelectedGenreChange }
        />
        <MovieList movies={ moviesSt } />
        <AddMovie onClick={ this.handleAddMovie } />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MovieLibrary;
