// implement MovieLibrary component here
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

class MovieLibrary extends Component {
  constructor(props) {
    super();

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movie: props.movies,
    };
  }

  resetState = (state) => {
    const { movies } = this.props;
    const newlistMovies = [...movies, state];
    this.setState({
      movie: newlistMovies,
    });
  }

  filterMovieSearchText = () => {
    const { searchText } = this.state;
    const { movies } = this.props;
    const newMovieList = movies.filter(
      (movie) => (
        movie.title.toLowerCase().includes(
          searchText.toLowerCase(),
        ) || movie.subtitle.toLowerCase().includes(
          searchText.toLowerCase(),
        ) || movie.storyline.toLowerCase().includes(searchText.toLowerCase())
      ),
    );
    this.setState({
      movie: newMovieList,
    });
  };

  filterSelectedGenre = () => {
    const { movies } = this.props;
    const { selectedGenre, movie } = this.state;
    const newMovieList = movie.filter((mov) => mov.genre === selectedGenre);
    this.setState({
      movie: newMovieList,
    });
    if (newMovieList.length <= 0) {
      this.setState({
        movie: movies,
      });
    }
  }

  onSearchTextChange = ({ target }) => {
    const { name } = target;
    this.setState({
      [name]: target.value,
    }, () => {
      if (name === 'searchText') {
        this.filterMovieSearchText();
      }
      if (name === 'selectedGenre') {
        this.filterSelectedGenre();
      }
    });
  }

  onBookmarkedChange = ({ target }) => {
    const { name } = target;
    this.setState({
      [name]: target.checked,
    }, () => {
      const { bookmarkedOnly, movie } = this.state;
      const { movies } = this.props;
      const newMovieList = movie.filter((mov) => mov.bookmarked === bookmarkedOnly);
      this.setState({
        movie: newMovieList,
      });
      if (bookmarkedOnly === false) {
        this.setState({
          movie: movies,
        });
      }
    });
  };

  render() {
    const { searchText, bookmarkedOnly, selectedGenre, movie } = this.state;
    const propsSearch = {
      searchText,
      onSearchTextChange: this.onSearchTextChange,
      bookmarkedOnly,
      onBookmarkedChange: this.onBookmarkedChange,
      selectedGenre,
      onSelectedGenreChange: this.onSearchTextChange,
    };

    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar { ...propsSearch } />
        <MovieList movies={ movie } />
        <AddMovie onClick={ this.resetState } />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.object,
  ).isRequired,
};

export default MovieLibrary;
