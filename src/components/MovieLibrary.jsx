import React, { Component } from 'react';

import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';
import movies from '../data';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: movies,
    };
// This binding is necessary to make `this` work in the callbac
    this.handleSearchTextChange = this.handleSearchTextChange.bind(this);
    this.handleBookmarkedChange = this.handleBookmarkedChange.bind(this);
  }

  handleSearchTextChange(event) { // está função irá tratar com o evento ao receber um titulo no input
    const { movieSearched } = event.target; // armazena o valor do titulo buscado
    const filteredMovieList = movies.filter((movie) => movie.title.includes(movieSearched) // o titulo digitado será o filtro
        || movie.subtitle.includes(movieSearched) // essa função irá buscar o nome do filme no subtitulo
        || movie.storyline.includes(movieSearched)); // essa funçao irá buscar o nome do filme na sinopse

    this.setState({
      searchText: movieSearched,
      movies: filteredMovieList,
    });
  }

  handleBookmarkedChange(event) { // função que irá trabalhar com apenas os favoritos
    const { checked } = event.target;
    const filteredMovieList = movies.filter((movie) => movie.bookmarked === checked);
    if (checked === true) {
      this.setState({
        bookmarkedOnly: checked,
        movies: filteredMovieList,
      });
    } if (checked === false) {
      this.setState({
        bookmarkedOnly: checked,
        movies: movies,
      });
    }
  }

  render() {
    const {
      searchText,
      bookmarkedOnly,
      selectedGenre,
      moviesSt,
    } = this.state;

    return (
        <SearchBar 
            searchText={ searchText } // searchText oriundo do estado de <MovieLibrary /> deve ser passado para a prop searchText de <SearchBar />
            onSearchTextChange={ this.handleSearchTextChange } // propriedade oriunda de searchBar recebe a funç
            bookmarkedOnly={ bookmarkedOnly } // apenas 
        />
    )
}