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
  }

  addMovie = (newMovie) => {
    const { movies } = this.state; // array movies como estiver quando clicou no botão
    this.setState({
      movies: [...movies, newMovie], // spread o array movies e adiciona o novo no final
    });
  }

  textChange = ({ target: { value } }) => { // desestrutura value do target desestruturado de event
    const { searchText, movies } = this.state; // pega searchText e movies como estiverem quando a função foi chamada
    this.setState({
      searchText: value,
      movies: movies.filter((movie) => movie.title.toLowerCase().includes(searchText) // === não funciona porque se você digitar "Harry" então Harry Potter tem que aparecer,
        || movie.subtitle.toLowerCase().includes(searchText)
        || movie.storyline.toLowerCase().includes(searchText)),
    });
  }

  bookmarkedChange = ({ target: { checked } }) => {
    const { movies } = this.state;
    this.setState({
      bookmarkedOnly: checked,
      movies: movies.filter(({ bookmarked }) => bookmarked === checked),
    });
  }

  genreChange = ({ target: { value } }) => {
    const { movies } = this.state;
    this.setState({
      selectedGenre: value,
      movies: movies.filter(({ genre }) => genre === value),
    });
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
    return (
      <section>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.textChange }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.bookmarkedChange }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.genreChange }
        />
        <MovieList movies={ movies } />
        <AddMovie onClick={ this.addMovie } />
      </section>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      subtitle: PropTypes.string,
      storyline: PropTypes.string,
      rating: PropTypes.number,
      imagePath: PropTypes.string,
    }),
  ).isRequired,
};
