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

render() {
  const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
  return (
    <div>
      <h2> My awesome movie library </h2>
      <SearchBar
        searchText={ searchText }
        onChange={ this.handleChange }
        bookmarkedOnly={ bookmarkedOnly }
        selectedGenre={ selectedGenre }
      />
      <MovieList
        movies={ movies }
        searchText={ searchText }
        handleChange={ this.handleChange }
        bookmarkedOnly={ bookmarkedOnly }
        selectedGenre={ selectedGenre }
      />
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
