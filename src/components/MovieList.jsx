import React from 'react';
import PropTypes from 'prop-types';

import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const {
      movies,
      bookmarkedOnly,
      selectedGenre,
      searchText,
    } = this.props;

    return (
      <div data-testid="movie-list" className="movie-list">
        {
          movies.filter((movie) => !bookmarkedOnly || bookmarkedOnly === movie.bookmarked)
            .filter((movie) => selectedGenre === '' || selectedGenre === movie.genre)
            .filter((movie) => searchText === '' || (
              movie.title.toLowerCase().includes(searchText.toLowerCase())
              || movie.subtitle.toLowerCase().includes(searchText.toLowerCase())
              || movie.storyline.toLowerCase().includes(searchText.toLowerCase())
            ))
            .map((movie) => <MovieCard key={ movie.title } movie={ movie } />)
        }
      </div>
    );
  }
}

MovieList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.object,
  ),
  bookmarkedOnly: PropTypes.bool,
  selectedGenre: PropTypes.string,
  searchText: PropTypes.string,
}.isRequired;

export default MovieList;
