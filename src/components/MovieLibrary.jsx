import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import MovieList from './MovieList';
import AddMovie from './AddMovie';

// Após dica do Davi Alves Turma 14-B,
// Verifiquei na documentação que:
// É possível que constructor() receba 'props' como parametro
class MovieLibrary extends Component {
  constructor(props) {
    super();
    const { movies } = props;
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies,
    };

    this.handleChange = this.handleChange.bind(this);
    this.addMovieCallback = this.addMovieCallback.bind(this);
  }

  handleChange({ target: { name, value, checked } }) {
    this.setState({
      [name]: (name === 'bookmarkedOnly' ? checked : value),
    });
  }

  getMoviesArray({ searchText, selectedGenre, bookmarkedOnly, movies }) {
    let newArray = movies;
    if (searchText !== '') {
      newArray = newArray
        .filter(({ title, subtitle, storyline }) => [title, subtitle, storyline]
          .some((value) => value.toLowerCase().includes(searchText.toLowerCase())));
    }
    if (selectedGenre !== '') {
      newArray = newArray.filter((item) => item.genre === selectedGenre);
    }
    if (bookmarkedOnly) {
      newArray = newArray.filter((item) => item.bookmarked);
    }
    return newArray;
  }

  addMovieCallback(newMovie) {
    const { movies } = this.state;
    this.setState({ movies: [...movies, newMovie] });
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    const toRender = this
      .getMoviesArray(this.state);

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
        <AddMovie onClick={ this.addMovieCallback } />
      </main>
    );
  }
}

MovieLibrary.propTypes = { movies: PropTypes.arrayOf(PropTypes.object).isRequired };

export default MovieLibrary;
