// implement MovieLibrary component here
import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';

class MovieLibrary extends React.Component {
  render() {
    const { movies } = this.props;
    return (
      <>
        {movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
      </>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    rating: PropTypes.number,
    imagePath: PropTypes.string,
    bookmarked: PropTypes.bool,
    genre: PropTypes.string,
  })),
}.isRequired;
