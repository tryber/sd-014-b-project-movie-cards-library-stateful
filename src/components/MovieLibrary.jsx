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

  render() {
    const {
      searchText,
      bookmarkedOnly,
      selectedGenre,
      movies,
    } = this.state;

    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ (event) => {
            event.persist();
            this.setState({
              searchText: event.target.value,
            });
          } }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ (event) => {
            event.persist();
            this.setState({
              bookmarkedOnly: event.target.checked,
            });
          } }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ (event) => {
            event.persist();
            this.setState({
              selectedGenre: event.target.value,
            });
          }  }
        />
        <MovieList
          movies={ movies }
          searchText={ searchText }
          bookmarkedOnly={ bookmarkedOnly }
          selectedGenre={ selectedGenre }
        />
        <AddMovie
          onClick={ (newMovie) => {
            const movieToBeSaved = newMovie;
            movieToBeSaved.rating = parseInt(movieToBeSaved.rating, 10);
            const moviesToShow = movies.map((movie) => movie);
            moviesToShow.push(movieToBeSaved);
            this.setState({
              movies: moviesToShow,
            });
          } }
        />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.object,
  ).isRequired,
};

export default MovieLibrary;
