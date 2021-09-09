import React from 'react';
import PropTypes from 'prop-types';
import AddMovie from './AddMovie';
import MovieCard from './MovieCard';
import SearchBar from './SearchBar';

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;

    return (
      <div data-testid="movie-list" className="movie-list">
        <SearchBar />
        { movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />) }
        <AddMovie />
      </div>
    );
  }
}

MovieList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.object,
  ).isRequired,
};

export default MovieList;
