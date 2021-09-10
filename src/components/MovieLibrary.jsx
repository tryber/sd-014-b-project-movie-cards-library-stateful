import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';
import MovieList from './MovieList';

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
    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    this.onBookmarkedChange = this.onBookmarkedChange.bind(this);
    this.onSelectedGenreChange = this.onSelectedGenreChange.bind(this);
  }

  onSearchTextChange({ target }) { // muda o estad com o valor e depois atualiza com o filtro
    this.setState({
      searchText: target.value,
    });
    this.filterMoviesByText(target.value.toLowerCase());
  }

  onBookmarkedChange({ target }) {
    this.setState({
      bookmarkedOnly: target.checked,
    });
    this.filterMoviesByFavorite(target.checked);
  }

  onSelectedGenreChange({ target }) {
    this.setState({
      selectedGenre: target.value,
    });
    this.filterMoviesByGenre(target.value);
  }

  addMovie =(element) => {
    this.setState((previousState) => ({
      movies: [...previousState.movies, element],
    }));
  }

  filterMoviesByGenre(genre) {
    const { movies } = this.props;
    const allMovies = [...movies];

    this.setState({ // filtro para a função acima mudar o estado, se value for true filtra de acordo com o genre senão filtra movies
      movies: allMovies.filter((movie) => (genre
        ? movie.genre === genre : movies)),
    });
  }

  filterMoviesByFavorite(check) {
    const { movies } = this.props;
    const allMovies = [...movies];

    this.setState({
      movies: allMovies.filter((movie) => (check
        ? movie.bookmarked === check : movies)),
    });
  }

  filterMoviesByText(search) {
    const { movies } = this.props;
    const allMovies = [...movies];

    this.setState({
      movies: allMovies.filter((movie) => (search
        ? movie.title.toLowerCase().includes(search)
        || movie.subtitle.toLowerCase().includes(search)
        || movie.storyline.toLowerCase().includes(search) : movies)),
    });
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
    return (
      <div>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.onSearchTextChange }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.onBookmarkedChange }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.onSelectedGenreChange }
        />
        <MovieList movies={ movies } />
        <AddMovie onClick={ this.addMovie } />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(Object).isRequired,
};

export default MovieLibrary;
