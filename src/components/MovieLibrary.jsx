import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import MovieList from './MovieList';
import AddMovie from './AddMovie';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);

    this.filterName = this.filterName.bind(this);
    this.filterGenre = this.filterGenre.bind(this);
    this.filterBookmarked = this.filterBookmarked.bind(this);
    this.updateState = this.updateState.bind(this);
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: props.movies,
    };
  }

  updateState({ target }) {
    const { name, type } = target;
    const value = (type === 'checkbox') ? target.checked : target.value;
    this.setState({ [name]: value }, () => this.filterMovies());
  }

  filterMovies() {
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    const { movies } = this.props;

    if (searchText !== '') {
      return this.setState({ movies: this.filterName() });
    }

    if (selectedGenre !== '') {
      return this.setState({ movies: this.filterGenre() });
    }

    if (bookmarkedOnly) {
      return this.setState({ movies: this.filterBookmarked() });
    }

    return this.setState({ movies });
  }

  filterName() {
    const { searchText } = this.state;
    const { movies } = this.props;
    function conditionFilterName(movie) {
      if (movie.title.toLowerCase().includes(searchText.toLocaleLowerCase())
          || movie.subtitle.toLowerCase().includes(searchText.toLocaleLowerCase())
          || movie.storyline.toLowerCase().includes(searchText.toLocaleLowerCase())) {
        return true;
      }

      return false;
    }

    return movies.filter((movie) => conditionFilterName(movie));
  }

  filterGenre() {
    const { movies } = this.props;
    const { selectedGenre } = this.state;
    return movies.filter((movie) => movie.genre === selectedGenre);
  }

  filterBookmarked() {
    const { movies } = this.state;
    return movies.filter((movie) => movie.bookmarked);
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;

    return (
      <>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.updateState }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.updateState }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.updateState }
        />
        <MovieList movies={ movies } />
        <AddMovie />
      </>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      subtitle: PropTypes.string.isRequired,
      storyline: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired,
      imagePath: PropTypes.string.isRequired,
      bookmarked: PropTypes.bool.isRequired,
      genre: PropTypes.string.isRequired,
    }),
  )
    .isRequired,
};

export default MovieLibrary;
