import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  constructor() {
    super();
    this.filtraOsFilmes = this.filtraOsFilmes.bind(this);
  }

  arrMap(...arr) {
    return arr[0].map((movie) => (<MovieCard
      data-testid="movie-card"
      key={ movie.title }
      movie={ movie }
    />));
  }

  searchTextFun(searchText, ...arr) {
    return arr[0].filter(({ title, subtitle, storyline }) => title
      .includes(searchText)
      || subtitle.includes(searchText) || storyline.includes(searchText));
  }

  filtraOsFilmes() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.props;
    if (bookmarkedOnly === true && selectedGenre === '') {
      const arr = this.searchTextFun(searchText, movies)
        .filter(({ bookmarked }) => bookmarked === true);
      return this.arrMap(arr);
    } if (bookmarkedOnly === true && selectedGenre !== '') {
      const arr = this.searchTextFun(searchText, movies)
        .filter(({ bookmarked }) => bookmarked === true)
        .filter(({ genre }) => genre === selectedGenre);
      return this.arrMap(arr);
    } if (bookmarkedOnly === false && selectedGenre !== '') {
      const arr = this.searchTextFun(searchText, movies)
        .filter(({ genre }) => genre === selectedGenre);
      return this.arrMap(arr);
    }
    const arr = this.searchTextFun(searchText, movies);
    return this.arrMap(arr);
  }

  render() {
    return (
      <div data-testid="movie-list" className="movie-list">
        { this.filtraOsFilmes() }
      </div>
    );
  }
}

MovieList.propTypes = {
  searchText: PropTypes.string.isRequired,
  bookmarkedOnly: PropTypes.bool.isRequired,
  selectedGenre: PropTypes.string.isRequired,
  movies: PropTypes.arrayOf(
    PropTypes.object,
  ).isRequired,
};

export default MovieList;
