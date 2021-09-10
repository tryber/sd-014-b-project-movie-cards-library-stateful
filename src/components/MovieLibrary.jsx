// implement MovieLibrary component here
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import MovieList from './MovieList';
import AddMovie from './AddMovie';

class MovieLibrary extends Component {
  constructor() {
    super();
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      // movies: props.movies,
    };
  }

  render() {
    const { movies } = this.props;
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    return (
      <>
        <SearchBar
          movies={ movies }
          searchText={ searchText }
          bookmarkedOnly={ bookmarkedOnly }
          selectedGenre={ selectedGenre }
        />
        <MovieList movies={ movies } />
        <AddMovie onClick="" />
      </>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    rating: PropTypes.number,
    imagePath: PropTypes.string,
    bookmarked: PropTypes.bool,
    genre: PropTypes.string,
  })).isRequired,
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
*/
