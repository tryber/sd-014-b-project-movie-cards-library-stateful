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
    this.filterSelection = this.filterSelection.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.AddMovie = this.AddMovie.bind(this);
  }

  handleChange({ target }) {
    const { name } = target;
    const value = (target.type === 'checkbox') ? target.checked : target.value;
    const { movies } = this.state;
    this.setState({
      [name]: value,
    }, () => this.filterSelection(movies));
  }

  filterSelection(array) {
    const { bookmarkedOnly, selectedGenre, searchText } = this.state;
    const filterSelection = array.filter((
      { title,
        subtitle,
        storyline,
      },
    ) => (
      title.includes(searchText)
      || subtitle.includes(searchText)
      || storyline.includes(searchText)
    ));
    const filterFavorite = filterSelection.filter((movie) => {
      if (bookmarkedOnly === true) {
        return movie.bookmarked === true;
      }
      return movie;
    });
    const filterGenre = filterFavorite.filter((movie) => {
      if (selectedGenre !== '') {
        return movie.genre === selectedGenre;
      }
      return movie;
    });
    this.setState({
      movies: filterGenre,
    });
  }

  AddMovie(state) {
    const { movies } = this.state;
    const moviesUpdates = [...movies, state];
    this.setState({
      movies: moviesUpdates,
    });
  }

  render() {
    const { selectedGenre, bookmarkedOnly, movies, searchText } = this.state;
    return (
      <div>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.handleChange }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.handleChange }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.handleChange }
        />
        <MovieList movies={ movies } />
        <AddMovie onClick={ this.AddMovie } />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MovieLibrary;
