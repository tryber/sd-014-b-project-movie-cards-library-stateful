import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import MovieList from './MovieList';
import AddMovie from './AddMovie';

/*
16 - Configure o estado inicial do componente MovieLibray
O componente <MovieLibrary /> possui como estado as seguintes propriedades:

searchText: guarda o texto de busca por filmes;
bookmarkedOnly: um boolean que guarda se é para filtrar por filmes favoritados ou não;
selectedGenre: guarda o gênero do filme selecionado para poder fazer a filtragem;
movies: guarda a lista de filmes.

Ou seja, o estado de <MovieLibrary /> contém a lista de filmes e os filtros a serem aplicados sobre a listagem.

O estado inicial do componente <MovieLibrary /> deve ser:
searchText: '';
bookmarkedOnly: false;
selectedGenre: '';
movies: a lista de filmes passadas pela props movies.

O que será verificado:
Será validado se o searchText é inicializado com uma string vazia
Será validado se o bookmarkedOnly é inicializado com o boleano falso
Será validado se o selectedGenre é inicializado com uma string vazia
Será validado se o todos os movies são renderezidados.
OBS: Esse teste só irá ser aprovado após a conclusão dos requisitos 17 e 18. -> seatchbar e movielist dentro da movielibrary
*/

// 15 - Crie um componente chamado <MovieLibrary />
class MovieLibrary extends Component {
  constructor(props) {
    super(props);
    // const { movies } = this.props;
    // 16 - Configure o estado inicial do componente <MovieLibrary />
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: props.movies,
    };

    this.filterText = this.filterText.bind(this);
    this.filterBookmarked = this.filterBookmarked.bind(this);
    this.filterGenre = this.filterGenre.bind(this);
    this.moviesResults = this.moviesResults.bind(this);
    this.addNewMovie = this.addNewMovie.bind(this);
  }

  // Filtros

  // Filtro de busca de expressão em pelo menos algum dos campos: no title OU subtitle OU storyline
  filterText = ({ title, subtitle, storyline }) => {
    // Destructuring searchText do estado
    const { searchText } = this.state;

    // Ref. "includes": https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes
    const findTitle = title.toLowerCase().includes(searchText);
    const findSubTitle = subtitle.toLowerCase().includes(searchText);
    const findStoryLine = storyline.toLowerCase().includes(searchText);
    // title ou subtitle ou storyline/sinopse
    return findTitle || findSubTitle || findStoryLine;
  }

  // Filtro de favoritos
  filterBookmarked = ({ bookmarked }) => {
    // Destructuring do bookmarkedOnly do obj state
    const { bookmarkedOnly } = this.state;

    // if (empty string, 0, null, false, undefined, NaN)
    if (!bookmarkedOnly) return true;
    return bookmarked === bookmarkedOnly;
  }

  // Filtro de gêneros
  filterGenre = ({ genre }) => {
    // Destructuring do selectedGenre do obj state
    const { selectedGenre } = this.state;

    // if (empty string, 0, null, false, undefined, NaN)
    if (selectedGenre === '') return true;
    return genre === selectedGenre;
  }

  // Filtro total, encadeamento dos 3
  moviesResults = () => {
    // Destructuring de movies do obj das props
    const { movies } = this.props;
    // Retornar resultado (moviesResults) dos filtros encadeados sobre { movies }
    const moviesResults = movies
      .filter((movie) => this.filterText(movie))
      .filter((movie) => this.filterBookmarked(movie))
      .filter((movie) => this.filterGenre(movie));

    // Update do estado da movie list -> filtragem dos filmes:
    this.setState({
      movies: moviesResults,
    });
  }

  addNewMovie = (newMovie) => {
    const { movies } = this.props;
    // Update do estado -> filme adicionado
    this.setState({
      // Adicionar novo filme, rest operator ...
      movies: [...movies, newMovie],
    });
  }

  handleChange = ({ target }) => {
    // Destructuring name do target
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value,
    }, this.moviesResults);
  }
  // 17 - Renderize <SearchBar /> dentro de <MovieLibrary />
  // 18 - Renderize <MovieList /> dentro de <MovieLibrary />
  // 19 - Renderize <AddMovie /> dentro de <MovieLibrary />

  render() {
    // Destructuring movies e critérios de busca (searchBar)
    const { movies, searchText, bookmarkedOnly, selectedGenre } = this.state;
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

        <MovieList movies={ movies } />

        <AddMovie onClick={ this.addNewMovie } />

      </div>
    );
  }
}

/*
15 - Crie um componente chamado <MovieLibrary />
Esse componente renderizará a biblioteca de filmes que renderizará a searchBar e o addMovies
para filtrar por filmes e adicionar um filme à biblioteca respectivamente.

<MovieLibrary /> deve receber como props:
movies, um array
*/

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MovieLibrary;
