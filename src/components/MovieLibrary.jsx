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
      movies: { movies } = this.props,
    };
  }

  render() {
    return (

    );
  }
}

// MovieLibrary.propTypes = {
//     movies: PropTypes.arrayOf(SearchBar).isRequired,
// }

export default MovieLibrary;
