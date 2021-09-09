import React from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import MovieList from './MovieList';

class MovieLibrary extends React.Component {
  constructor(props) {
    super();
    const { movies } = props;
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies,
    };
  }

  handleCheckbox = (name, checked) => {
    if (checked) {
      this.setState({ [name]: true });
    } else { this.setState({ [name]: false }); }
  }

  handleClick = (event) => {
    const { value, name, type, checked } = event.target;
    if (type === 'checkbox') {
      this.handleCheckbox(name, checked);
    } else { this.setState({ [name]: value }); }
  }

  filtermoviesByText = (films, searchText) => films.filter(
    (movie) => movie.title.toUpperCase().includes(searchText.toUpperCase())
        || movie.subtitle.toUpperCase().includes(searchText.toUpperCase())
        || movie.storyline.toUpperCase().includes(searchText.toUpperCase()),
  );

  filterMoviesByGenre = (films, selectedGenre) => {
    if (selectedGenre !== '') {
      return films.filter((movie) => movie.genre === selectedGenre);
    }
    return films;
  }

  filterMoviesByBookMarked = (films, bookmarkedOnly) => {
    if (bookmarkedOnly) { return films.filter((movie) => movie.bookmarked); }
    return films;
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
    let filteredMovies = this.filterMoviesByBookMarked(movies, bookmarkedOnly);
    filteredMovies = this.filtermoviesByText(filteredMovies, searchText);
    filteredMovies = this.filterMoviesByGenre(filteredMovies, selectedGenre);

    return (
      <main>
        <SearchBar
          searchText={ searchText }
          callBack={ this.handleClick }
          bookmarkedOnly={ bookmarkedOnly }
          selectedGenre={ selectedGenre }
          onSearchTextChange={ this.handleClick }
          onBookmarkedChange={ this.handleClick }
          onSelectedGenreChange={ this.handleClick }
        />
        <MovieList movies={ filteredMovies } />
      </main>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MovieLibrary;
