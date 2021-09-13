import React, { Component } from 'react';
// esse componente será responśavel por atualizar os filmes exibidos de acordo com o eventos
import PropTypes from 'prop-types';
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
      moviesFiltered: movies,
    };
    // This binding is necessary to make `this` work in the callback
    this.handleSearchTextChange = this.handleSearchTextChange.bind(this);
    this.handleBookmarkedChange = this.handleBookmarkedChange.bind(this);
    this.handleSelectedGenreChange = this.handleSelectedGenreChange.bind(this);
    this.handleAddMovie = this.handleAddMovie.bind(this);
  }

  handleSearchTextChange(event) { // está função irá tratar com o evento ao receber um titulo no input
    const { moviesFiltered } = this.state;
    const { movieSearched } = event.target; // armazena o valor do titulo buscado
    const filtMo = moviesFiltered.filter((movie) => movie.title.includes(movieSearched)
    // o titulo digitado será o filtro
        || movie.subtitle.includes(movieSearched) // essa função irá buscar o nome do filme no subtitulo
        || movie.storyline.includes(movieSearched)); // essa funçao irá buscar o nome do filme na sinopse

    this.setState({
      searchText: movieSearched,
      moviesFiltered: filtMo,
    });
  }

  handleBookmarkedChange(event) { // função que irá trabalhar com apenas os favoritos
    const { movies } = this.props;
    const { moviesFiltered } = this.state;
    const { checked } = event.target;
    const filtMo = moviesFiltered.filter((movie) => movie.bookmarked === checked);
    // a prop. 'bookmarked' está em data.js
    if (checked === true) { // a array que irá ser gerada é dos filmes com bookemared: true
      this.setState({
        bookmarkedOnly: checked,
        moviesFiltered: filtMo,
      });
    } if (checked === false) {
      this.setState({
        moviesFiltered: movies,
      });
    }
  }

  handleSelectedGenreChange(event) {
    const { value } = event.target;
    const { moviesFiltered } = this.state;
    const filtMo = moviesFiltered.filter((movie) => movie.genre.includes(value));
    this.setState({
      selectedGenre: value,
      moviesFiltered: filtMo,
    });
  }

  handleAddMovie(event, state) {
    const { movieState } = this.state;
    const aux = movieState;
    event.preventDefault(); //  prevent a browser reload/refresh.
    aux.push(state);
    this.setState({
      movieState: aux,
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
        <section>
          <SearchBar // passa os valores das propriedades dentro do component search bar
            // chama as callbacks para atualizar os estados
            searchText={ searchText } // searchText oriundo do estado de <MovieLibrary /> deve ser passado para a prop searchText de <SearchBar />
            onSearchTextChange={ this.handleSearchTextChange } // propriedade oriunda de searchBar recebe a funç
            bookmarkedOnly={ bookmarkedOnly } // apenas favoritos
            onBookmarkedChange={ this.handleBookmarkedChange }
            selectedGenre={ selectedGenre }
            onSelectedGenreChange={ this.handleSelectedGenreChange }
          />
        </section>
        <main>
          <MovieList movies={ moviesFiltered } />
        </main>
        <div>
          <AddMovie onClick={ this.handleAddMovie } />
        </div>
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MovieLibrary;
