import React from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import MovieList from './MovieList';
import AddMovie from './AddMovie';

class MovieLibrary extends React.Component {
  constructor() {
    super();
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
    };
  }

  handleAll = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  render() {
    const { movies } = this.props;
    const {
      searchText,
      bookmarkedOnly,
      selectedGenre,
    } = this.state;
    return (
      <div>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.handleAll }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.handleAll }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.handleAll }
        />
        <MovieList movies={ movies } />
        <AddMovie />
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
