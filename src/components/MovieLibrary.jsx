import React, { Component } from 'react';
import SearchBar from './SearchBar';
import MovieList from './MovieList';
import AddMovie from './AddMovie';

// import PropTypes from 'prop-types';
// import { movies } from '../data';

class MovieLibrary extends Component {
//  constructor(props) {
//    super(props);
//  }

  render() {
    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar />
        <MovieList />
        <AddMovie />
      </div>
    );
  }
}
/*
MovieLibrary.PropTypes = {
};
*/
export default MovieLibrary;
