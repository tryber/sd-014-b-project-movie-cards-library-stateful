import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import MovieList from './MovieList';
import AddMovie from './AddMovie';

class MovieLibrary extends Component {
  constructor() {
    super();
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: [],
    };

    this.handleChange = this.handleChange.bind(this);
    this.fillMoviesState = this.fillMoviesState.bind(this);
    this.defaultCallback = this.defaultCallback.bind(this);
  }

  handleChange({ target: { name, value, checked } }) {
    this.setState({
      [name]: (name === 'bookmarkedOnly' ? checked : value),
    });
  }

  getMoviesArray(searchText, genre, bookmarked, array) {
    let newArray = array;
    if (searchText !== '') {
      newArray = newArray
        .filter(({ title, subtitle, storyline }) => [title, subtitle, storyline]
          .find((value) => value.toLowerCase().includes(searchText.toLowerCase())));
    }
    if (genre !== '') {
      newArray = newArray.filter((item) => item.genre === genre);
    }
    if (bookmarked) {
      newArray = newArray.filter((item) => item.bookmarked);
    }
    return newArray;
  }

  fillMoviesState(prop) {
    const { movies } = this.state;
    prop.forEach((movie) => {
      if (!movies.includes(movie)) movies.push(movie);
    });
  }

  defaultCallback(item) {
    const { movies } = this.props;
    const array = [...movies];
    array.push(item);
    this.setState({ movies: array });
  }

  render() {
    const { movies } = this.props;
    const { searchText, bookmarkedOnly, selectedGenre, movies: moviesState } = this.state;
    this.fillMoviesState(movies);
    // console.log(moviesState);
    const toRender = this
      .getMoviesArray(searchText, selectedGenre, bookmarkedOnly, moviesState);
    // console.log(toRender);

    return (
      <main>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.handleChange }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.handleChange }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.handleChange }
        />
        <MovieList movies={ toRender } />
        <AddMovie onClick={ this.defaultCallback } />
      </main>
    );
  }
}

MovieLibrary.propTypes = { movies: PropTypes.arrayOf(PropTypes.object).isRequired };

export default MovieLibrary;
