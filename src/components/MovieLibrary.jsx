// implement MovieLibrary component here
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

class MovieLibrary extends Component {
    constructor() {
        super();
        this.state = {
          searchText: false ,
          bookmarkedOnly: '',
          selectedGenre: '',
          movies: movies,
        };

  render() {
    const { movies } = this.props;
    return (
      <section></section>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.shape({}).isRequired,
};

export default MovieLibrary;
