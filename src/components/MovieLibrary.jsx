/* eslint-disable react/no-unused-state */
import React, { Component } from 'react';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';
import movies from '../data';
import MovieList from './MovieList';

class MovieLibrary extends Component {
  constructor() {
    super();

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies,
    };
  }

  handleClick = (newMovie) => {
    movies.push(newMovie);
    this.setState({
      movies,
    });
  }

  handleChange = ({ target }) => {
    const { name } = target;
    const value = (target.type === 'checkbox') ? target.checked : target.value;
    this.setState = {
      [name]: value,
    };
  }

  filterByText= (text) => {  
    
    this.setState({
      movies: movies.filter((element) => element.title.includes(text) || element.subtitle.includes(text) || element.storyline.includes(text))
    })
  }

  filterByGenre = (select) => {
    this.setState({
      movies: movies.filter((element) => element.genre === select)
    })
  }

  filterByFavorite = (check) => {
    this.setState({
      movies: movies.filter((element) => element.bookmarked === check)
    })
  } 

  render() {
    const { movies } = this.props;
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    return (
      <div>
        <SearchBar
          searchText={ } 
          onSearchTextChange={ this.handleChange }
          bookmarkedOnly={  }
          onBookmarkedChange={ this.handleChange }
          selectedGenre={  }
          onSelectedGenreChange={ this.handleChange }
        />
        <AddMovie onClick={ this.handleClick } />
        <MovieList movies={ movies } />
      </div>
    );
  }
}

export default MovieLibrary;
