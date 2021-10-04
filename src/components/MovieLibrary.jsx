import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';
import MovieList from './MovieList';

class MovieLibrary extends Component {
  constructor() {
    super();
    // const { movies } = this.props;
    this.state = {
      searchText: '',
      // movies,
    };

    this.addNewMovie = this.addNewMovie.bind(this);
  }

  addNewMovie() {
    // const { movies } = this.props;
    console.log('Foi chamado!');
    // this.setState(
    //   [movies]: [...movies, newMovie],
    // );
  }

  render() {
    const { searchText } = this.state;
    const { movies } = this.props;
    return (
      <div>
        <SearchBar searchText={ searchText } />
        <AddMovie onClick={ this.addNewMovie } />
        <MovieList movies={ movies } />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.object,
  ).isRequired,
};

export default MovieLibrary;
