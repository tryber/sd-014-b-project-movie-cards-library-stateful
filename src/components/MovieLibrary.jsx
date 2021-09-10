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

    this.myFilterMovies = this.myFilterMovies.bind(this);
    this.handleChangeText = this.handleChangeText.bind(this);
  }

  handleClick() {

  }

  handleChangeText({ target: { name, type, checked, value } }) {
    this.setState({
      [name]: (type === 'checkbox' ? checked : value),
    });
  }

  myFilterMovies() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
    return movies.filter((movie) => (bookmarkedOnly ? movie.bookmarked : true))
      .filter((movie) => (selectedGenre ? movie.genre === selectedGenre : true))
      .filter((movie) => movie.title.includes(searchText)
        || movie.subtitle.includes(searchText)
        || movie.storyline.includes(searchText));
  }

  render() {
    const {
      searchText,
      bookmarkedOnly,
      selectedGenre,
    } = this.state;
    return (
      <main>
        <h2> My awesome movie library </h2>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.handleChangeText }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.handleChangeText }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.handleChangeText }
        />
        <MovieList movies={ this.myFilterMovies() } />
        <AddMovie onClick={ this.handleClick } />
      </main>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.object,
  ).isRequired,
};

export default MovieLibrary;
