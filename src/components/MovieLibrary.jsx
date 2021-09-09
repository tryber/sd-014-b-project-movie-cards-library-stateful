import React, { Component } from 'react';
import PropTypes from 'prop-types';

import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);

    const { movies } = this.props;

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies,
    };
  }

  onClick = () => {
    console.log('Alguma coisa');
  }

  changeText = () => {

  }

  bookMarked = () => {

  }

  selectedGenre = () => {

  }

  render() {
    const { movies, searchText, bookmarkedOnly, selectedGenre } = this.state;
    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.changeText }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.bookMarked }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.selectedGenre }
        />
        <MovieList movies={ movies } />
        <AddMovie onClick={ this.onClick } />
      </div>
    );
  }
}
MovieLibrary.propTypes = {
  movies: PropTypes.func.isRequired,
};

export default MovieLibrary;
