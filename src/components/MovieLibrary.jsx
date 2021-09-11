// // implement MovieLibrary component here
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import MovieList from './MovieList';
import AddMovie from './AddMovie';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);
    // console.log(this.props);

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: props.movies,
    };
    // this.handleChange = this.handleChange.bind(this);
  }

  // ajustar função
  handleChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value,
    });
  }

  insertNewMovie = ({ title, subtitle, storyline, rating, genre, imagePath }) => {
    const newMovies = {
      title,
      subtitle,
      storyline,
      rating: parseFloat(rating),
      genre,
      imagePath,
    };
    this.setState(({ movies }) => ({ movies: [...movies, newMovies] }));
    // função criada com auxílio de Lucas Caribé turma 13, utilizado spred operator para add
    // os novos filmes dentro do array de objetos de filmes.
  }

  moviesFilters(movies) {
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    // filtra por titulo,subtitulo e sinopse
    const searchMovies = movies.filter((movie) => {
      const checkFilterMovie = (movie.title.toLowerCase()
        .includes(searchText.toLowerCase())
        || movie.subtitle.toLowerCase().includes(searchText.toLowerCase())
        || movie.storyline.toLowerCase().includes(searchText.toLowerCase()));
      return checkFilterMovie;
    });

    const favoriteMovie = bookmarkedOnly ? searchMovies
      .filter((movie) => movie.bookmarked) : searchMovies;

    const result = selectedGenre ? favoriteMovie
      .filter((movie) => movie.genre === selectedGenre) : favoriteMovie;
    return result;
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
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.handleChange }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.handleChange }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.handleChange }
        />
        <MovieList movies={ this.moviesFilters(movies) } />
        <AddMovie onClick={ this.insertNewMovie } />
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
