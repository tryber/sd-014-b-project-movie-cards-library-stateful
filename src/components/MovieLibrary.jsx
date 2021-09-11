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
      selectGenre: '',
      movies,
    };

    this.onInputChange = this.onInputChange.bind(this);
    this.addNewMovie = this.addNewMovie.bind(this);
    this.filtering = this.filtering.bind(this);
  }

  onInputChange({ target }) {
    const { name } = target;
    const value = (target.type !== 'checkbox') ? target.value : target.checked;
    this.setState({
      [name]: value,
    });
  }

  filtering() {
    const { searchText, bookmarkedOnly, selectGenre, movies } = this.state;

    if (searchText !== '') {
      return movies.filter((element) => element.title.toLowerCase()
        .includes(searchText)
    || element.subtitle.toLowerCase().includes(searchText)
    || element.storyline.toLowerCase().includes(searchText));
    }
    if (selectGenre !== '') {
      return movies.filter((movie) => movie.genre === selectGenre);
    }
    if (bookmarkedOnly) {
      return movies.filter((movie) => movie.bookmarked === bookmarkedOnly);
    }
    return movies;
  }

  addNewMovie(eleCurrState) {
    const { movies } = this.props;
    this.setState({
      movies: [...movies, eleCurrState],
    });
  }

  render() {
    const { searchText, bookmarkedOnly, selectGenre } = this.state;

    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.onInputChange }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.onInputChange }
          selectGenre={ selectGenre }
          onSelectedGenreChange={ this.onInputChange }
        />
        <MovieList movies={ this.filtering() } />
        <AddMovie onClick={ this.addNewMovie } />
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
