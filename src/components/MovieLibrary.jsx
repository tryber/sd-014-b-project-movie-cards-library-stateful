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
    this.fillMovies = this.fillMovies.bind(this);
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

  fillMovies(prop) {
    const { movies } = this.state;
    prop.forEach((item) => movies.push(item));
  }

  defaultCallback(item) {
    console.log(item);
  }

  render() {
    const { movies } = this.props;
    const { searchText, bookmarkedOnly, selectedGenre, movies: moviesArray } = this.state;
    if (moviesArray.length < movies.length) this.fillMovies(movies);
    // console.log(moviesArray);
    const toRender = this
      .getMoviesArray(searchText, selectedGenre, bookmarkedOnly, moviesArray);
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
