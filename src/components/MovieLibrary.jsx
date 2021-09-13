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
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value,
    });
  }

  filterMovies() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
    if (searchText !== '') {
      let movieTitle;
      let movieSubTitle;
      let movieStoryLine;

      movies.filter((movie) => {
        movieTitle = movie.title.toLowerCase();
        movieSubTitle = movie.subtitle.toLowerCase();
        movieStoryLine = movie.storyLine.toLowerCase();

        return movieTitle.includes(searchText.toLowerCase())
          || movieSubTitle.includes(searchText.toLowerCase())
          || movieStoryLine.includes(searchText.toLowerCase());
      });
    }

    if (selectedGenre !== '') {
      movies.filter((movie) => movie.genre === selectedGenre);
    }

    if (bookmarkedOnly) {
      movies.filter((movie) => movie.bookMarked === bookmarkedOnly);
    }
    return movies;
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    return (
      <div>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.handleChange }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.handleChange }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.handleChange }
        />
        <AddMovie />
        <MovieList movies={ this.filterMovies() } />
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
