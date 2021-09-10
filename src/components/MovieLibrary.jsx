import React from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import MovieList from './MovieList';
import AddMovie from './AddMovie';

class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);
    this.information = this.information.bind(this);
    this.addNewMovie = this.addNewMovie.bind(this);
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: props.movies,
    };
  }

  information({ target }) {
    const { movies } = this.props;
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });

    const filterMovies = movies.filter(
      (movie) => movie.title.includes(target.value)
      || movie.subtitle.includes(target.value)
      || movie.storyline.includes(target.value)
      || movie.genre.includes(target.value)
      || movie.bookmarked === (target.value),
    );
    this.setState({
      movies: filterMovies,
    });
  }

  addNewMovie(state) {
    const { movies } = this.state;
    this.setState({
      movies: [...movies, state],
    });
  }

  render() {
    const { bookmarkedOnly, searchText, selectedGenre, movies } = this.state;
    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar
          onSearchTextChange={ this.information }
          searchText={ searchText }
          onBookmarkedChange={ this.information }
          bookmarkedOnly={ bookmarkedOnly }
          onSelectedGenreChange={ this.information }
          selectedGenre={ selectedGenre }
        />
        <MovieList movies={ movies } />
        <AddMovie onClick={ this.addNewMovie } />
      </div>
    );
  }
}

// An array of a object
MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MovieLibrary;
