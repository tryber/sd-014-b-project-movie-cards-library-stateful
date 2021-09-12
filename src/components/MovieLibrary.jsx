import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AddMovie from './AddMovie';
import SearchBar from './SearchBar';
import MovieList from './MovieList';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);
    const { movies } = this.props;
    this.state = { movies };
  }

  AddMovie = (movie) => {
    this.setState((state) => ({ movies: [...state.movies, movie] }));
  }

  render() {
    const { movies } = this.state;
    return (
      <section>
        <SearchBar />
        <MovieList movies={ movies } />
        <AddMovie onClick={ this.AddMovie } />
      </section>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object),
}.isRequired;

export default MovieLibrary;
