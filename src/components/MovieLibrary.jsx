import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);

    const { movies } = props;

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

  onSearchTextChange({ target: { value } }) {
    const { movies } = this.props;
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

  onBookmarkedChange({ target: { checked } }) {
    const { movies } = this.props;
    this.setState({
      bookmarkedOnly: checked,
      movies: checked
        ? movies.filter((movie) => movie.bookmarked === checked)
        : movies,
    });
  }

  onSelectedGenreChange({ target: { value } }) {
    const { movies } = this.props;
    if (value === '') {
      this.setState({
        selectedGenre: '',
        movies,
      });
    } else {
      this.setState({
        selectedGenre: value,
        movies: movies.filter((movie) => movie.genre.toLowerCase().includes(value)),
      });
    }
  }

  /*
  * Consultei o repositório de Thyara Nonato para resolver a função addMovie
  * https://github.com/tryber/sd-014-b-project-movie-cards-library-stateful/blob/thyara-movie-cards-library-stateful/src/components/MovieLibrary.jsx
  */
  addMovie = (movie) => {
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
          bookmarkedOnly={ bookmarkedOnly }
          selectedGenre={ selectedGenre }
          onSearchTextChange={ this.onSearchTextChange }
          onBookmarkedChange={ this.onBookmarkedChange }
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
};

export default MovieLibrary;
