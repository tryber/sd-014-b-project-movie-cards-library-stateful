import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import MovieList from './MovieList';
import AddMovie from './AddMovie';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);
    const { movies } = this.props;
    this.state = {
      movies,
    };
  }

  render() {
    const { movies } = this.state;
    return (
      <div>
        <h2> My awesome movie library </h2>

        <SearchBar />

        <MovieList movies={ movies } />

        <AddMovie />

      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MovieLibrary;
