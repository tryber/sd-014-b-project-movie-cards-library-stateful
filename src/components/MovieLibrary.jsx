import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: props.movies,
    };
    this.filterCard = this.filterCard.bind(this);
    this.addNewMovie = this.addNewMovie.bind(this);
  }

  // Referência: https://github.com/michaelcaxias
  // src: https://github.com/tryber/sd-014-b-project-movie-cards-library-stateful/blob/9bf92067661b4cf3605d39e82cadb91ced8fd1fb/src/components/MovieLibrary.jsx
  filterCard() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
    if (searchText !== '') {
      return movies.filter(
        (card) => card.title.toLowerCase().includes(searchText.toLowerCase())
          || card.subtitle.toLowerCase().includes(searchText.toLowerCase())
          || card.storyline.toLowerCase().includes(searchText.toLowerCase()),
      );
    }
    if (selectedGenre !== '') {
      return movies.filter((card) => card.genre === selectedGenre);
    }
    if (bookmarkedOnly) {
      return movies.filter((card) => card.bookmarked === bookmarkedOnly);
    }
    return movies;
  }

  addNewMovie(event, state) {
    event.preventDefault();
    const { movies } = this.props;
    this.setState({
      movies: [...movies, state],
    });
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ (event) => {
            this.setState({ searchText: event.target.value });
          } }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ (event) => {
            this.setState({ bookmarkedOnly: event.target.checked });
          } }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ (event) => {
            this.setState({ selectedGenre: event.target.value });
          } }
        />
        <MovieList movies={ this.filterCard() } />
        <AddMovie onClick={ this.addNewMovie } />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MovieLibrary;
