import React, { Component } from 'react';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';
import movies from '../data';
import MovieList from './MovieList';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);
    const { movies } = this.props;
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies,
    };
    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    this.onBookmarkedChange = this.onBookmarkedChange.bind(this);
    this.onSelectedGenreChange = this.onSelectedGenreChange.bind(this);
  }

  onSearchTextChange = ({ target }) => {
    const listMov = movies;
    if (target.name === 'searchText') {
      this.filterByText(target.value.toLowerCase());
    } else {
      this.setState({
        movies: listMov,
      });
    }
  }

  filterByText= (text) => {
    const listMovies = movies;
    const filter = listMovies.filter((element) => element.title
      .toLowerCase().includes(text)
    || element.subtitle.toLowerCase().includes(text)
    || element.storyline.toLowerCase().includes(text));
    this.setState({
      movies: filter,
    });
  }

  onSelectedGenreChange= ({ target }) => {
    const listMov = movies;
    if (target.name === 'selectedGenre') {
      this.filterByGenre(target.value);
    } else {
      this.setState({
        movies: listMov,
      });
    }
  }

  filterByGenre = (select) => {
    const listMovies = movies;
    const filterGenre = listMovies
      .filter((element) => (select ? element.genre === select : listMovies));
    this.setState({
      movies: filterGenre,
    });
  }

  onBookmarkedChange = ({ target }) => {
    const listMov = movies;
    if (target.name === 'bookmarkedOnly') {
      this.filterByFavorite(target.value);
    } else {
      this.setState({
        movies: listMov,
      });
    }
  }

  filterByFavorite = (check) => {
    const listMovies = movies;
    const filterCheck = listMovies
      .filter((element) => (check ? element.bookmarked === true
        : element));
    this.setState({
      movies: filterCheck,
    });
  };

  render() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
    return (
      <div>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.onSearchTextChange }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.onBookmarkedChange }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.onSelectedGenreChange }
        />
        <MovieList movies={ movies } />
        <AddMovie onClick={ this.handleClick } />
      </div>
    );
  }
}

export default MovieLibrary;
