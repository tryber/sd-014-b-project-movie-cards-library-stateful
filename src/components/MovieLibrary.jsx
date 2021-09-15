import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
// import AddMovie from './AddMovie';
import MovieList from './MovieList';
import movies from '../data';

class MovieLibrary extends Component {
  constructor() {
    super();

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
    };
  }

  handleChange(event) {
    this.setState({
      searchText: event.target.value,
      bookmarkedOnly: event.target.value,
      selectedGenre: event.target.value,
    });
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    return (
      <div>
        <SearchBar
          searchText={ searchText }
          bookmarkedOnly={ bookmarkedOnly }
          selectedGenre={ selectedGenre }
          movies={ movies }
        />
        {/* <AddMovie /> */}
        <MovieList />
      </div>
    );
  }
}

// MovieLibrary.propTypes = {
//   movies: PropTypes.arrayOf(
//     PropTypes.object,
//   ).isRequired,
// };

export default MovieLibrary;
