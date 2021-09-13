import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import MovieList from './MovieList';
import AddMovie from './AddMovie';

class MovieLibrary extends Component {
  constructor(props) {
    super();
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: props.movies,
    };
    this.handleChange = this.handleChange.bind(this);
    this.filterMovies = this.filterMovies.bind(this);
    this.newMovie = this.newMovie.bind(this);
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    }, () => this.filterMovies());
  }

  filterMovies() {
    const { movies } = this.props;
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    let newList = movies.filter(({ title, subtitle, storyline }) => (
      title.includes(searchText)
      || subtitle.includes(searchText)
      || storyline.includes(searchText)
    ));

    if (bookmarkedOnly === true) {
      newList = newList.filter(({ bookmarked }) => bookmarked === true);
    }
    if (selectedGenre !== '') {
      newList = newList.filter(({ genre }) => genre === selectedGenre);
    }

    this.setState({ movies: newList });
  }

  newMovie(newMovieStates) {
    const { movies } = this.props;
    const moviesUpdate = [...movies, newMovieStates];
    this.setState({ movies: moviesUpdate });
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
    return (
      <main>
        <section className="search">
          <SearchBar
            searchText={ searchText }
            onSearchTextChange={ this.handleChange }
            bookmarkedOnly={ bookmarkedOnly }
            onBookmarkedChange={ this.handleChange }
            selectedGenre={ selectedGenre }
            onSelectedGenreChange={ this.handleChange }
          />
        </section>
        <MovieList movies={ movies } />
        <section className="addmovie">
          <AddMovie onClick={ this.newMovie } />
        </section>
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
