import React from 'react';
import PropTypes from 'prop-types';
import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: props.movies,
    };
  }

  onSearchTextChange = ({ target }) => {
    const { name } = target;
    const { movies } = this.state;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
      movies: movies.filter(
        (movie) => movie.title.toLowerCase().includes(value)
        || movie.subtitle.toLowerCase().includes(value)
        || movie.storyline.toLowerCase().includes(value),
      ),
    });
  };

onBookmarkedChange = ({ target }) => {
  const { name } = target;
  const { movies } = this.state;
  const value = target.type === 'checkbox' ? target.checked : target.value;

  if (value === true) {
    this.setState({
      [name]: value,
      movies: movies.filter((movie) => movie.bookmarked === true),
    });
  } else {
    this.setState({
      [name]: value,
      movies: movies.filter((movie) => movie),
    });
  }
};

  onSelectedGenreChange = ({ target }) => {
    const { name } = target;
    const { movies } = this.state;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value,
    });
    if (value !== '') {
      this.setState({
        movies: movies.filter((movie) => movie.genre === value),
      });
    } else {
      this.setState({
        movies: movies.filter((movie) => movie),
      });
    }
  };

  addNewMovie = (newMovie) => {
    const { movies } = this.state;
    this.setState({ movies: [...movies, newMovie] });
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
    return (
      <div className="App">
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.onSearchTextChange }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.onBookmarkedChange }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.onSelectedGenreChange }
        />

        <MovieList movies={ movies } />

        <AddMovie onClick={ this.addNewMovie } />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      subtitle: PropTypes.string,
      storyline: PropTypes.string,
      rating: PropTypes.number,
      imagePath: PropTypes.string,
      bookmarked: PropTypes.bool,
      genre: PropTypes.string,
    }),
  ).isRequired,
};

export default MovieLibrary;
