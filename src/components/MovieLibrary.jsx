import React, { Component } from 'react';
import '../App.css';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: [],
    };
  }

  changer(keyName, { target }) {
    this.setState({
      [keyName]: target.value,
    });
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;

    return (
      <div>
        { movies }
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ (event) => this.changer('searchText', event) }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ (event) => this.changer('bookmarkedOnly', event) }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ (event) => this.changer('selectedGenre', event) }
        />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.array,
}.isRequired;

export default MovieLibrary;
