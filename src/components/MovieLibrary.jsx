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
  };

  handleTextChange(event) {
    this.setState({
      searchText: event.target.value,
    }, (prevState) => this.setState({
      movies: prevState.movies.filter((movie) =>  movie.title.includes(this.state.searchText) ||  movie.subtitle.includes(this.state.searchText) ||  movie.storyline.includes(this.state.searchText)),
    }));
  }

  handleBookmarked(event) {
    this.setState({
      bookmarkedOnly: event.target.checked,
    }, () => {
      if (this.state.bookmarkedOnly === true) {
        return (this.setState({
          movies: movies.filter((movie) => movie.bookmarked === true),
        }));
      }
      return (this.setState({
        movies: movies,
      }));
    });
  }
  
  handleSelectedGenre(event) {
    this.setState({
      selectedGenre: event.target.value,
    }, () => {
      this.setState({
        movies: movies.filter((movie) => movie.genre.includes(this.state.selectedGenre)),
      });
    });
  };

  render() {
    const filtredMovies = this.state.movies;
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
        <MovieList movies={ filtredMovies } />
      </>
    );
  };
};

MovieLibrary.propTypes = {
  movies: PropTypes.array.isRequired,
};

export default MovieLibrary;
