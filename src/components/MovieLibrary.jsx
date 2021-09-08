import React, { Component } from 'react';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';
import movies from '../data';
import MovieList from './MovieList';

class MovieLibrary extends Component {
  constructor() {
    super();

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: movies,
    };
  }

  handleChange = ({ target }) => {
    const { name } = target;
    const value = (target.type === 'checkbox') ? target.checked : target.value;
    this.setState = {
      [name]: value,
    };
  }

  filterIncludes = () =>{
        
  }

  render() {
    return()
  }
}

export default MovieLibrary;
