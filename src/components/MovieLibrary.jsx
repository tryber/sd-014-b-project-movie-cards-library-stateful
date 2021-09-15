// implement MovieLibrary component here
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';
import MovieList from './MovieList';

class MovieLibrary extends Component {
  render() {
    const { movies } = this.props;
    return (
      <section>
        <SearchBar />
        <AddMovie movies={ movies } />
        <MovieList movies={ movies } />
      </section>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.object,
  ).isRequired,
};

export default MovieLibrary;

// Consultei o repositório de Ariane Ueti para verificar a parte de props.
// https://github.com/tryber/sd-014-b-project-movie-cards-library-stateful/pull/63/files
