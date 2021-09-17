import React from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';
import MovieList from './MovieList';

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
    this.modifiState = this.modifiState.bind(this);
    this.addMovieList = this.addMovieList.bind(this);
  }

  modifiState({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  }

  addMovieList(newMovie, callback) {
    const { movies } = this.state;
    const newArr = [...movies, newMovie];
    this.setState({
      movies: newArr,
    }, () => callback);
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
    return (
      <main>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.modifiState }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.modifiState }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.modifiState }
        />
        <MovieList
          searchText={ searchText }
          bookmarkedOnly={ bookmarkedOnly }
          selectedGenre={ selectedGenre }
          movies={ movies }
        />
        <AddMovie onClick={ this.addMovieList } />
      </main>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.object.isRequired,
  ).isRequired,
};

export default MovieLibrary;
