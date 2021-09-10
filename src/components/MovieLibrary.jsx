// implement MovieLibrary component here
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import MovieList from './MovieList';
import AddMovie from './AddMovie';

class MovieLibrary extends Component {
  constructor(props) {
    super();
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: props.movies,
    };
    this.onSearchTextChange = this.onSearchTextChange.bind(this);
  }

  onSearchTextChange({ target }) {
    const { movies, searchText } = this.state;
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
      movies: movies.filter((element) => element.title.includes(searchText)),
    });
  }

  onClick(state) {
    this.setState({
      movies: state,
    });
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
    return (
      <>
        <SearchBar
          searchText={ searchText }
          bookmarkedOnly={ bookmarkedOnly }
          selectedGenre={ selectedGenre }
          onSearchTextChange={ this.onSearchTextChange }
        />
        <MovieList movies={ movies } />
        <AddMovie onClick={ this.onclick } />
      </>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.object,
  ).isRequired,
};

export default MovieLibrary;

/*
Requisito 15: criar um componente chamado movielibrary
criar um componente de classe
ele vai receber os filmes então fazemos disso uma props
adicionamos o searchbar para renderizar passando os filmes
fazemos o proptype para validação
Requisito 17: é renderizar o searchBar dentro do movieLibrary
Refatorando:
adicionamos os estados iniciais para searchtext, bookmarkedonly e select genre
na barra de buscas passamos como props acima cada uma recebendo seu respectivo estado inicial.
validamos com proptype
Passamos props como parâmetro do contructor
fazemos o bind do onsearch que estava faltando e fazemos a função onsearch
a função onsearch filtra os títulos de acordo com o parâmetro searchtext
o onclick dela atualiza o estado
dentro do render searchbar utilizamos o onsearchtextchange como props passando a função
addmovie no onlick atualiza o estado
validamos
*/
