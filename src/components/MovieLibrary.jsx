// implement MovieLibrary component here
import React from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import MovieList from './MovieList';
import movies from '../data';

class MovieLibrary extends React.Component {
  constructor() {
    super();
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: movies,
    };
    this.handleTextChange = this.handleTextChange.bind(this);
    this.handleBookmarked = this.handleBookmarked.bind(this);
    this.handleSelectedGenre = this.handleSelectedGenre.bind(this);
  }

  handleTextChange(event) {
    this.setState({
      searchText: event.target.value,
    }, () => this.setState((prevState) => ({
      movies: prevState.movies.filter((movie) => (
        movie.title.includes(prevState.searchText)
        || movie.subtitle.includes(prevState.searchText)
        || movie.storyline.includes(prevState.searchText))),
    })));
  }

  handleBookmarked(event) {
    this.setState({
      bookmarkedOnly: event.target.checked,
    }, () => {
      const { bookmarkedOnly } = this.state;
      if (bookmarkedOnly === true) {
        return (this.setState({
          movies: movies.filter((movie) => movie.bookmarked === true),
        }));
      }
      return (this.setState((prevState) => ({
        movies: prevState.movies,
      })));
    });
  }

  handleSelectedGenre(event) {
    this.setState({
      selectedGenre: event.target.value,
    }, () => {
      this.setState((prevState) => ({
        movies: movies.filter((movie) => movie.genre.includes(prevState.selectedGenre)),
      }));
    });
  }

  render() {
    const { movies } = this.state;
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    return (
      <>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.handleTextChange }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.handleBookmarked }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.handleSelectedGenre }
        />
        <MovieList movies={ movies } />
      </>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MovieLibrary;
