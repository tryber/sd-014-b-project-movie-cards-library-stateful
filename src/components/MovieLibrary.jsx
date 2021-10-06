import React from 'react';
import React, { Component } from 'react';
import SearchBar from './SearchBar';

class MovieLibrary extends Component {
  constructor() {
    super();

    this.state = {
      searchText: '',
    };
  }



  render() {
    const { searchText } = this.state;
    return (
      <SearchBar searchText={ searchText } />
    );
  }
}

export default MovieLibrary;
