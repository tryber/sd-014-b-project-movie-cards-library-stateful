import React, { Component } from 'react';
// import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

class MovieLibrary extends Component {
//  constructor(props) {
//    super(props);
//  }

  render() {
    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar />
        <AddMovie />
      </div>
    );
  }
}

//         <MovieList movies={ this.props.movies } />

export default MovieLibrary;
