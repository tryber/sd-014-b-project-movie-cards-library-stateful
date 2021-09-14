/* eslint-disable react/no-unused-state */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

class MovieLibrary extends Component {
  constructor(props) {
    super();

    this.state = {
      searchText: '',
      boobkmarkedOnly: false,
      selectedGenre: '',
      movies: props.movies,
    };
    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    this.onBookmarkChange = this.onBookmarkChange.bind(this);
    this.onSelectedGenreChange = this.onBookmarkChange.bind(this);
  }

  onSearchTextChange({ target }) {
    const { movies, searchText } = this.state;
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
      movies: movies.filter((element) => (
        element.title.includes(searchText)
        || element.subtitle.includes(searchText)
        || element.storyline.includes(searchText)
      )),
    });
  }

  onBookmarkChange({ target }) {
    const { movies } = this.state;
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const bookmark = movies.filter((element) => element.bookmarked === true);
    if (target.checked) {
      this.setState({
        [name]: value,
        movies: bookmark,
      });
    }
  }

  onSelectedGenreChange({ target }) {
    const { movies } = this.state;
    const { name, value } = target;
    const genre = movies.filter((element) => element.genre === value);
    if (target.checked) {
      this.setState({
        [name]: value,
        movies: genre,
      });
    }
  }

  render() {
    const { searchText, boobkmarkedOnly, movies } = this.state;
    return (
      <div>
        <SearchBar
          searchText={ searchText }
          boobkmarkedOnly={ boobkmarkedOnly }
        />
        <MovieList movies={ movies } />
        <AddMovie />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.array,
  ).isRequired,
};

export default MovieLibrary;
