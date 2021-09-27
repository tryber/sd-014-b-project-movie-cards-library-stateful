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
  }

  // Para entender melhor a lógica dessas funções e conseguir implementá-las consultei o repositotório da Thyara https://github.com/tryber/sd-014-b-project-movie-cards-library-stateful/pull/19

  onSearchTextChange = ({ target: { value } }) => {
    const { movies } = this.state;
    if (value === '') {
      this.setState({
        searchText: '',
        movies,
      });
    } else {
      this.setState({
        searchText: value,
        movies: movies.filter((movie) => movie.title.toLowerCase().includes(value)
          || movie.subtitle.toLowerCase().includes(value)
          || movie.storyline.toLowerCase().includes(value)),
      });
    }
  }

  onBookmarkedChange = ({ target: { checked } }) => {
    const { movies } = this.state;
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
        movies: movies.filter((movie) => movie.genre === value),
      });
    }
  }

  addMovie = (movie) => {
    const { movies } = this.state;
    this.setState({ movies: [...movies, movie] });
  }

  render() {
    const {
      searchText,
      bookmarkedOnly,
      selectedGenre,
      movies } = this.state;
    return (
      <main>
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
      </main>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.object,
  ).isRequired,
};

export default MovieLibrary;
