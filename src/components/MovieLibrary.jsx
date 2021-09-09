import React from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import MovieList from './MovieList';
import AddMovie from './AddMovie';

class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);

    const { movies } = props;
    // Requisito 16
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies,
    };
  }

  // Requisitos 17 e 18
  onSearchTextChange = ({ target: { value } }) => {
    const { movies } = this.props;
    if (value === '') {
      this.setState({
        searchText: '',
        movies,
      });
    } else {
      this.setState({
        movies: movies.filter((movie) => movie.title.toLowerCase().includes(value)
            || movie.subtitle.toLowerCase().includes(value)
            || movie.storyline.toLowerCase().includes(value)),
        searchText: value,
      });
    }
  }

  onBookmarkedChange = ({ target: { checked } }) => {
    const { movies } = this.props;
    if (checked) {
      this.setState({
        bookmarkedOnly: true,
        movies: movies.filter((movie) => movie.bookmarked === true),
      });
    } else {
      this.setState({
        bookmarkedOnly: false,
        movies,
      });
    }
  }

  onSelectedGenreChange = ({ target: { value } }) => {
    const { movies } = this.props;
    if (value === '') {
      this.setState({
        selectedGenre: '',
        movies,
      });
    } else {
      this.setState({
        selectedGenre: value,
        movies: movies.filter((filme) => filme.genre === value),
      });
    }
  }

  // Requisito 19
  addMovie = (movie) => {
    const { movies } = this.state;
    this.setState({ movies: [...movies, movie] });
  }

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
        <AddMovie onClick={ this.addMovie } />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object),
}.isRequired;

export default MovieLibrary;
