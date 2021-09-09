// implement MovieLibrary component here
import React, { Component } from 'react';

import PropTypes from 'prop-types';
import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

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

    this.handleChange = this.handleChange.bind(this);
    this.moviesFilter = this.moviesFilter.bind(this);
    this.addMovie = this.addMovie.bind(this);
  }

  handleChange(e) {
    if (e.target.id !== 'bookmarkedOnly') {
      return this.setState({ [e.target.id]: e.target.value });
    }
    return this.setState({ [e.target.id]: e.target.checked });
  }

  addMovie(film) {
    const { movies } = this.props;
    this.setState({ movies: [...movies, film] });
  }

  moviesFilter() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
    // Filtra os filmes favoritados
    const filmes = movies.filter((item) => ( // Filtra caso queira apenas os favoritos
      bookmarkedOnly ? item.bookmarked : true
    )).filter((item) => ( // Filtra de acordo com o gênero escolhido
      selectedGenre !== '' ? item.genre === selectedGenre : true
    )).filter((item) => { // Filtra os filmes, caso os mesmos contenham texto o searchText
      if (searchText !== '') {
        return (
          item.title.includes(searchText)
          || item.subtitle.includes(searchText)
          || item.storyline.includes(searchText)
        );
      } return true;
    });
    return filmes;
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.handleChange }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.handleChange }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.handleChange }
        />
        <MovieList movies={ this.moviesFilter() } />
        <AddMovie onClick={ this.addMovie } />
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
