import React, { Component } from 'react';
import movies from '../data';
import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
    };
  }

  handleChange = ({ target }) => {
    this.setState({
      searchText: target.value,
    });
  }

  render() {
    const { searchText, bookmarkedOnly } = this.state;
    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.handleChange }
          onBookmarkedChange={ this.handleChange }
          bookmarkedOnly={ bookmarkedOnly }
        />
        <MovieList movies={ movies } />
        <AddMovie />
      </div>
    );
  }
}

export default MovieLibrary;
