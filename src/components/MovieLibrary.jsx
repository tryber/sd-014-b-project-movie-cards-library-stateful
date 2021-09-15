import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: props.movies,
    };
    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    this.onBookmarkedChange = this.onBookmarkedChange.bind(this);
    this.onSelectedGenreChange = this.onBookmarkedChange.bind(this);
    this.onClick = this.onClick.bind(this);
  }

  onClick(newMovie) {
    this.setState((prevState) => ({
      ...prevState, movies: [...prevState.movies, newMovie],
    }));
  }

  onSearchTextChange({ target }) {
    const { movies, searchText } = this.state;
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
      movies: movies.filter((element) => (
        element.title.includes(searchText)
        || element.subtitle.includes(searchText)
        || element.storyline.includes(searchText)
      )),
    });
  }

  onBookmarkedChange({ target }) {
    const { movies } = this.state;
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const bookmark = movies.filter((element) => element.bookmarked === true);
    if (target.checked) {
      this.setState({
        [name]: value,
        movies: bookmark,
      });
    }
  }

  onSelectedGenreChange({ target }) {
    const { movies } = this.state;
    const { name, value } = target;
    const genre = movies.filter((element) => element.genre === value);
    if (target.checked) {
      this.setState({
        [name]: value,
        movies: genre,
      });
    }
  }

  render() {
    const { selectedGenre, bookmarkedOnly, movies, searchText } = this.state;
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
        <AddMovie onClick={ this.onClick } />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MovieLibrary;
