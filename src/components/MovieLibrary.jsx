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

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

addMovie = (movie) => {
  // Adicionar state da AddMovie dentro do array de filmes....
  const { movies } = this.state;
  this.setState({
    movies: [...movies, movie],
  });
}

onBookmarkedOnly = ({ target: { checked } }) => {
  const { movies } = this.state;
  if (checked) {
    this.setState({
      bookmarkedOnly: true,
      movies: movies.filter((movie) => movie.bookmarked === true),
    });
  } else {
    this.setState({
      bookmarkedOnly: false,
      movies,
    });
  }
}

onSearchTextChange = ({ target: { value } }) => {
  const { movies } = this.state;
  if (value === '') {
    this.setState({
      searchText: '',
      movies,
    });
  } else {
    this.setState({
      searchText: value,
      movies: movies.filter((movie) => movie.title.toLowerCase().includes(value)
        || movie.subtitle.toLowerCase().includes(value)
        || movie.storyline.toLowerCase().includes(value)),
    });
  }
}

onSelectedGenreChange = ({ target: { value } }) => {
  const { movies } = this.state;
  if (value === '') {
    this.setState({
      selectedGenre: '',
      movies,
    });
  } else {
    this.setState({
      selectedGenre: value,
      movies: movies.filter((movie) => movie.genre === value),
    });
  }
}

render() {
  const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
  return (
    <div>
      <h2> My awesome movie library </h2>
      <SearchBar
        searchText={ searchText }
        bookmarkedOnly={ bookmarkedOnly }
        selectedGenre={ selectedGenre }
        onBookmarkedOnly={ this.onBookmarkedOnly }
        onChange={ this.handleChange }
        onSearchTextChange={ this.onSearchTextChange }
        onSelectedGenreChange={ this.onSelectedGenreChange }
      />
      <MovieList movies={ movies } />
      <AddMovie onClick={ this.addMovie } />
    </div>
  );
}
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
  // bookmarkedOnly: PropTypes.bool.isRequired,
};

export default MovieLibrary;
