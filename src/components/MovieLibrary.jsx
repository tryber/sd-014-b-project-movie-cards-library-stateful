import React from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import MovieList from './MovieList';
import AddMovie from './AddMovie';

class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);

    const { movies } = this.props;

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies,
    };
    this.handleChange = this.handleChange.bind(this);
    this.adddingMovie = this.adddingMovie.bind(this);
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  }

  adddingMovie(movie) {
    const { movies } = this.state;
    this.setState({
      movies: [...movies, movie],
    });
  }

  filter() {
    const { searchText, selectedGenre, bookmarkedOnly, movies } = this.state;
    let filtedmovies = movies;
    if (searchText !== '') {
      filtedmovies = filtedmovies.filter((movie) => movie.title.toLowerCase()
        .includes(searchText.toLowerCase())
      || movie.subtitle.toLowerCase().includes(searchText.toLowerCase())
      || movie.storyline.toLowerCase().includes(searchText.toLowerCase()));
    }
    if (bookmarkedOnly === true) {
      filtedmovies = filtedmovies.filter((movie) => movie.bookmarked === true);
    }
    if (selectedGenre !== '') {
      filtedmovies = filtedmovies.filter((movie) => movie.genre === selectedGenre);
    }
    return filtedmovies;
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    return (
      <div className="container">
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.handleChange }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.handleChange }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.handleChange }
        />
        <MovieList movies={ this.filter() } />
        <AddMovie onClick={ (movie) => this.adddingMovie(movie) } />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};
export default MovieLibrary;
