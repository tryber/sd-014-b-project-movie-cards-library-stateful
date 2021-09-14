import React from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import MovieList from './MovieList';

class MovieLibrary extends React.Component {
  constructor(props) {
    super();

    const { movies } = props;
    this.state = {
      movies,
    };
  }

  render() {
    const { movies } = this.state;
    return (
      <div>
        <SearchBar />
        <MovieList movies={ movies } />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

// PropTypes de movie feito consultando o repositório do Leomar https://github.com/tryber/sd-014-b-project-movie-cards-library-stateful/tree/leomar-linhares-movie-cards-library-stateful

export default MovieLibrary;
