import React, { Component } from 'react';
// import PropTypes from 'prop-types';

// import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';
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
        {/* <MovieList movies={this.props.movies} /> */}
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
