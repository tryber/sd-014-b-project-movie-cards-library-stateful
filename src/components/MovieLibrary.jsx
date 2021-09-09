// implement MovieLibrary component here
import React, { Component } from 'react';

import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

export default class MovieLibrary extends Component {
/*   constructor(props) {
    super(props);
  } */

  render() {
    /* const { movies } = this.props; */
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

/* MovieLibrary.propTypes = {
  onChange: PropTypes.func.isRequired,
}; */
