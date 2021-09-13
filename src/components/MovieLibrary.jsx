// este componente será responśavel por atualizar os filmes exibidos de acordo com o eventos
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

class MovieLibrary extends Component { // define propriedade movies
  constructor(props) {
    super(props);

    const { movies } = this.props;

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      moviesFiltered: movies,
    };
    // This binding is necessary to make `this` work in the callback
    this.handleSearchTextChange = this.handleSearchTextChange.bind(this);
    this.handleBookmarkedChange = this.handleBookmarkedChange.bind(this);
    this.handleSelectedGenreChange = this.handleSelectedGenreChange.bind(this);
    this.handleAddMovie = this.handleAddMovie.bind(this);
  }

  handleSearchTextChange(event) { // está função irá tratar com o evento ao receber um titulo no input
    const { filtMovie } = event.target;
    const { moviesFiltered } = this.state; // // armazena o valor do titulo buscado
    const filteredList = moviesFiltered.filter((movie) => movie.title.includes(filtMovie)
    // (o que for digitado entrará como filtro pra gerar uma nova array de resultados)
        || movie.subtitle.includes(filtMovie) // essa função irá buscar o nome do filme no subtitulo
        || movie.storyline.includes(filtMovie)); // // essa funçao irá buscar o nome do filme na sinopse
    this.setState({
      searchText: filtMovie,
      moviesFiltered: filteredList,
    });
  }

  handleBookmarkedChange(event) { // função que irá trabalhar com apenas os favoritos
    const { checked } = event.target;
    const { movies } = this.props;
    const { moviesFiltered } = this.state;
    const filteredList = moviesFiltered.filter((movie) => movie.bookmarked === checked);
    // a prop. 'bookmarked' está em data.js
    if (checked === true) {
      this.setState({
        bookmarkedOnly: checked,
        moviesFiltered: filteredList,
      });
    } if (checked === false) {
      this.setState({
        bookmarkedOnly: checked,
        moviesFiltered: movies,
      });
    }
  }

  handleSelectedGenreChange(event) {
    const { value } = event.target;
    const { moviesFiltered } = this.state;
    const filteredList = moviesFiltered.filter((movie) => movie.genre.includes(value));
    this.setState({
      selectedGenre: value,
      moviesFiltered: filteredList,
    });
  }

  handleAddMovie(event, state) {
    const { moviesFiltered } = this.state;
    const auxiliar = moviesFiltered;
    event.preventDefault(); // prevent a browser reload/refresh.
    auxiliar.push(state);
    this.setState({
      moviesFiltered: auxiliar,
    });
  }

  render() {
    const {
      searchText,
      bookmarkedOnly,
      selectedGenre,
      moviesFiltered,
    } = this.state;
    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar // // passa os valores das propriedades dentro do component search bar
          // chama as callbacks para atualizar os estados
          searchText={ searchText } // searchText oriundo do estado de <MovieLibrary /> deve ser passado para a prop searchText de <SearchBar />
          onSearchTextChange={ this.handleSearchTextChange } // propriedade oriunda de searchBar recebe a funç
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.handleBookmarkedChange }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.handleSelectedGenreChange }
        />
        <MovieList movies={ moviesFiltered } />
        <AddMovie onClick={ this.handleAddMovie } />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MovieLibrary;
