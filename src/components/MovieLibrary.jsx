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

  changeState = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value,
    });

    this.conditional(target);
  }

  conditional = (target) => {
    if (target.name === 'bookmarkedOnly') this.filterMovies(target.checked);
    if (target.name === 'selectedGenre') this.filterGenre(target.value);
    if (target.name === 'searchText') this.filterTitle(target.value);
  }

  filterMovies = (value) => {
    const { movies } = this.props;
    const checkboxFunc = movies.filter(({ bookmarked }) => bookmarked === true);
    const confirmValueOfCheck = value === true ? checkboxFunc : movies;

    this.setState({
      movies: confirmValueOfCheck,
    });
  }

  filterGenre = (value) => {
    const { movies } = this.props;
    const getGenre = movies.filter(({ genre }) => genre === value);
    const confirmGenre = value === '' ? movies : getGenre;

    this.setState({
      movies: confirmGenre,
    });
  }

  filterTitle = (value) => {
    const { movies } = this.props;
    const getTitle = movies.filter(({ title, subtitle, storyline }) => (
      title.includes(value) || subtitle.includes(value) || storyline.includes(value)
    ));
    const confirmTitle = value === '' ? movies : getTitle;

    this.setState({
      movies: confirmTitle,
    });
  }

  addMovieButton = (newMovie) => {
    const { movies } = this.props;

    this.setState({
      movies: [...movies, newMovie],
    });
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar
          searchText={ searchText }
          onSelectedGenreChange={ this.changeState }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.changeState }
          selectedGenre={ selectedGenre }
          onSearchTextChange={ this.changeState }
        />
        <MovieList movies={ movies } />
        <AddMovie onClick={ this.addMovieButton } />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      subtitle: PropTypes.string,
      storyline: PropTypes.string,
      imagePath: PropTypes.string,
      rating: PropTypes.number,
    }),
  ).isRequired,
};

export default MovieLibrary;

// Consultei o repositório do Cezar Montenegro para resolver o requisito 17,18,19
// Link: https://github.com/tryber/sd-014-b-project-movie-cards-library-stateful/pull/109
