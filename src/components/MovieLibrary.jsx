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
      bookmarkedOnly: false,
      selectedGenre: '',
      searchText: '',
      movies,
    };
    this.handlhandleChange = this.handlhandleChange.bind(this);
    this.filterGenre = this.filterGenre.bind(this);
  }

  onClick = (state) => {
    const { movies } = this.state;
    this.setState({ movies: [...movies, state] });
  }

  filterGenre() {
    const { movies, selectedGenre, searchText, bookmarkedOnly } = this.state;
    if (selectedGenre !== '') {
      return movies.filter((filme) => filme.genre === selectedGenre);
    } if (searchText !== '') {
      return movies.filter((filme) => filme.title.includes(searchText)
      || filme.subtitle.includes(searchText)
      || filme.storyline.includes(searchText));
    } if (bookmarkedOnly === true) {
      return movies.filter((filme) => filme.bookmarked === bookmarkedOnly);
    }
    return movies;
  }

  handlhandleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox'
      ? target.checked : target.value;
    this.setState({ [name]: value });
  }

  render() {
    const { bookmarkedOnly, selectedGenre, searchText } = this.state;

    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar
          searchText={ searchText }
          bookmarkedOnly={ bookmarkedOnly }
          selectedGenre={ selectedGenre }
          onSearchTextChange={ this.handlhandleChange }
          onBookmarkedChange={ this.handlhandleChange }
          onSelectedGenreChange={ this.handlhandleChange }
        />
        <MovieList movies={ this.filterGenre() } />
        <AddMovie onClick={ this.onClick } />
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
// requisitos 14 a 19 com ajuda incrivel do Michel Caxias - 14 B
