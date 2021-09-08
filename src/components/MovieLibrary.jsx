// Requisito 15

import React from 'react';
import PropTypes from 'prop-types';
import AddMovie from './AddMovie';
import SearchBar from './SearchBar';
import MovieList from './MovieList';

export default class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);
    const { movies } = this.props;
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies,
    };

    this.handleSearchText = this.handleSearchText.bind(this);
    this.handleBookmarkedOnly = this.handleBookmarkedOnly.bind(this);
    this.handleSelectedGenre = this.handleSelectedGenre.bind(this);
  }

  // Requisito 16
  // handles feitos com a ajuda de Guilherme Andrade
  handleSearchText({ target }) {
    this.setState({
      searchText: target.value,
    });
  }

  handleBookmarkedOnly({ target }) {
    this.setState({
      bookmarkedOnly: target.checked,
    });
  }

  handleSelectedGenre({ target }) {
    this.setState({
      selectedGenre: target.value,
    });
  }

  handleAddMovies(newMovie) {
    this.setState((previousState) => ({
      movies: [...previousState.movies, newMovie],
    }));
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
    return (
      <div>
        {/* Requisito 17 */}
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.handleSearchText }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.handleBookmarkedOnly }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.handleSelectedGenre }
        />
        {/* Requisito 18 - feito com ajuda de Guilherme Andrade (ternário) */}
        <MovieList
          movies={ movies.filter((movie) => (
            (bookmarkedOnly === false ? true : movie.bookmarked === true)
              && (movie.genre.includes(selectedGenre))
              && (
                (movie.title.includes(searchText))
                || (movie.subtitle.includes(searchText))
                || (movie.storyline.includes(searchText))))) }
        />
        {/* Requisito 19 */}
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};
