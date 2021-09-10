import React, { Component } from 'react';
// esse componente será responśavel por atualizar os filmes exibidos de acordo com o eventos
import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);
    const { movies } = this.props; // define propriedade movies
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movieState: movies,
    };
    // This binding is necessary to make `this` work in the callback
    this.handleSearchTextChange = this.handleSearchTextChange.bind(this);
    this.handleBookmarkedChange = this.handleBookmarkedChange.bind(this);
    this.handleSelectedGenreChange = this.handleSelectedGenreChange.bind(this);
  }

  handleSearchTextChange(event) { // está função irá tratar com o evento ao receber um titulo no input
    const { movieState } = this.state;
    const { movieSearched } = event.target; // armazena o valor do titulo buscado
    const filteredMovie = movieState.filter((movie) => movie.title.includes(movieSearched)
    // o titulo digitado será o filtro
        || movie.subtitle.includes(movieSearched) // essa função irá buscar o nome do filme no subtitulo
        || movie.storyline.includes(movieSearched)); // essa funçao irá buscar o nome do filme na sinopse

    this.setState({
      searchText: movieSearched,
      movieState: filteredMovie,
    });
  }

  handleBookmarkedChange(event) { // função que irá trabalhar com apenas os favoritos
    const { movies } = this.props;
    const { movieState } = this.state;
    const { checked } = event.target;
    const filteredMovie = movieState.filter((movie) => movie.bookmarked === checked); // a prop. 'bookmarked' está em data.js
    if (checked === true) { // a array que irá ser gerada é dos filmes com bookemared: true
      this.setState({
        bookmarkedOnly: checked,
        movieState: filteredMovie,
      });
    } if (checked === false) {
      this.setState({
        movieState: movies,
      });
    }
  }

  handleSelectedGenreChange(event) {
    const { value } = event.target;
    const { movieState } = this.state;
    const filteredMovie = movieState.filter((movie) => movie.genre.includes(value));
    this.setState({
      selectedGenre: value,
      movieState: filteredMovie,
    });
  }

  render() {
    const {
      searchText,
      bookmarkedOnly,
      selectedGenre,
      movieState,
    } = this.state;

    return (
      <SearchBar // passa os valores das propriedades dentro do component search bar
        // chama as callbacks para atualizar os estados
        searchText={ searchText } // searchText oriundo do estado de <MovieLibrary /> deve ser passado para a prop searchText de <SearchBar />
        onSearchTextChange={ this.handleSearchTextChange } // propriedade oriunda de searchBar recebe a funç
        bookmarkedOnly={ bookmarkedOnly } // apenas favoritos
        onBookmarkedChange={ this.handleBookmarkedChange }
        selectedGenre={ selectedGenre }
        onSelectedGenreChange={ this.handleSelectedGenreChange }
      />
    );
  }
}

export default MovieLibrary;
