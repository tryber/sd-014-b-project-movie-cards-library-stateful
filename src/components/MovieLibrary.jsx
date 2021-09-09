// implement MovieLibrary component here
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import MovieList from './MovieList';

class MovieLibrary extends Component {
  render() {
    const { movies } = this.props;
    return (
      <>
        <SearchBar movies={ movies } />
        <MovieList movies={ movies } />
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
*/
