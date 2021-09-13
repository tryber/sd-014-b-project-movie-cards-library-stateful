// implement MovieLibrary component here
import React from 'react';
import PropTypes from 'prop-types';
import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: props.movies,
    };
  }

  // Logica do requisito 18 foi baseada no código do colega Rodolfo Braga. Source: https://github.com/tryber/sd-014-b-project-movie-cards-library-stateful/pull/3/commits/20ee64b74bdba13579d501f26c97c6e0c03dcaa6

  FilterMovieByInput = (movies) => {
    const { searchText } = this.state;
    return movies.filter(
      (movie) => movie.title.includes(searchText)
        || movie.subtitle.includes(searchText)
        || movie.storyline.includes(searchText),
    );
  }

  handleChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  }

  handleFilters = (movies) => {
    const { bookmarkedOnly, selectedGenre } = this.state;

    if (bookmarkedOnly && selectedGenre) {
      const filteredMovies = movies
        .filter((movie) => movie.bookmarked)
        .filter((movie) => movie.genre === selectedGenre);
      return this.FilterMovieByInput(filteredMovies);
    }

    if (bookmarkedOnly) {
      const filteredMovies = movies.filter((movie) => movie.bookmarked);
      return this.FilterMovieByInput(filteredMovies);
    }

    if (selectedGenre) {
      const filteredMovies = movies.filter(
        (movie) => movie.genre === selectedGenre,
      );
      return this.FilterMovieByInput(filteredMovies);
    }

    return this.FilterMovieByInput(movies);
  }

  addNewMovie = (newMovie) => {
    const { movies } = this.props;
    this.setState({
      movies: [...movies, newMovie],
    });
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
    return (
      <main>
        <section>
          <SearchBar
            searchText={ searchText }
            onSearchTextChange={ this.handleChange }
            bookmarkedOnly={ bookmarkedOnly }
            onBookmarkedChange={ this.handleChange }
            electedGenre={ selectedGenre }
            onSelectedGenreChange={ this.handleChange }
          />
        </section>
        <section className="add-movie">
          <AddMovie onClick={ this.addNewMovie } />
        </section>
        <section>
          <MovieList movies={ this.handleFilters(movies) } />
        </section>
      </main>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.array,
}.isRequired;

export default MovieLibrary;
