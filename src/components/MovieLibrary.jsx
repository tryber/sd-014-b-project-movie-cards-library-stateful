import React, { Component } from 'react';

import SearchBar from './SearchBar';

class MovieLibrary extends Component {
  render() {
    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar />
      </div>
    );
  }
}

export default MovieLibrary;
