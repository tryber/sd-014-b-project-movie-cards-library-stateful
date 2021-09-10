import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AddMovie from './AddMovie';
import SearchBar from './SearchBar';
import MovieList from './MovieList';

export default class MovieLibrary extends Component {
  constructor(props) {
    super(props);
    const { movies } = this.props;
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies,
    };
    this.changeInput = this.changeInput.bind(this);
    this.addNewMovie = this.addNewMovie.bind(this);
  }

  changeInput({ target }) {
    const { name } = target;
    const value = (target.type === 'checkbox') ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  }

  filterCard() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
    if (searchText !== '') {
      return movies.filter((card) => card.title.toLowerCase()
        .includes(searchText.toLowerCase()) || card.subtitle.toLowerCase()
        .includes(searchText.toLowerCase()) || card.storyline.toLowerCase()
        .includes(searchText.toLowerCase()));
    }
    if (selectedGenre !== '') {
      return movies.filter((card) => card.genre === selectedGenre);
    }
    if (bookmarkedOnly) {
      return movies.filter((card) => card.bookmarked === bookmarkedOnly);
    }
    return movies;
  }

  addNewMovie(state) {
    const { movies } = this.props;
    this.setState({
      movies: [...movies, state],
    });
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
    return (
      <>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.changeInput }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.changeInput }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.changeInput }
          movies={ movies }
        />
        <AddMovie onClick={ this.addNewMovie } />
        <MovieList movies={ this.filterCard() } />
      </>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.object,
  ).isRequired,
};
